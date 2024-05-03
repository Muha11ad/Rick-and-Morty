import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";

export interface EpisodeState {
	allEpisodes: { [key: string]: any };
	singleEpisode: { [key: string]: any };
	characters: [];
	status: string;
	error: undefined | string;
	id: number;
}
export interface fetchEpisodeState {
	idOfEpisode: number;
}

export const initialState: EpisodeState = {
	allEpisodes: {},
	singleEpisode: {},
	characters: [],
	status: "idle",
	error: undefined,
	id: 1,
};
export const fetchEpisode = createAsyncThunk(
	"episode/fetchEpisode",
	async ({ idOfEpisode }: fetchEpisodeState) => {
		try {
			//fetching all episodes starts
			let nextPage = `${baseUrl}/episode`;
			let allEpisodes: any = [];
			while (nextPage) {
				const getNextPage = await axios.get(nextPage);
				const { info, results } = getNextPage.data;
				allEpisodes = [...allEpisodes, ...results];
				nextPage = info.next;
			}
			//fetching all episodes ends
			const episodeResponse = await axios.get(
				`${baseUrl}/episode/${idOfEpisode}`
			);
			//fetching characters API starts
			const charactersPromises = episodeResponse.data.characters.map(
				(url: string) => axios.get(url)
			);
			const charactersResponse = await Promise.all(charactersPromises);
			const charactersData = charactersResponse.map((res) => res.data);
			//fetching characters API ends

			return {
				allEpisodes: allEpisodes,
				singleEpisode: episodeResponse.data,
				characters: charactersData,
			};
		} catch (error: any) {
			return error.message;
		}
	}
);

export const EpisodeSlice = createSlice({
	name: "episode",
	initialState,
	reducers: {
		getEpisode(state, action: PayloadAction<number>) {
			state.id = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchEpisode.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchEpisode.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.allEpisodes = action.payload.allEpisodes;
				state.singleEpisode = action.payload.singleEpisode;
				state.characters = action.payload.characters;
			})
			.addCase(fetchEpisode.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { getEpisode } = EpisodeSlice.actions;
export default EpisodeSlice.reducer;
