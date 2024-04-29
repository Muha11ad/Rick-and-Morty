import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { SingleHeroState } from "../../charachters/model/CharacterSlice.js";
const baseUrl = "https://rickandmortyapi.com/api";

export interface EpisodeResponseState {
	data: SingleHeroState[];
	status: string;
	error: undefined | string;
}

export const initialState: EpisodeResponseState = {
	data: [],
	status: "idle",
	error: undefined,
};

export const fetchCharacters = 
	createAsyncThunk("characters/fetchCharacters", async () => {
		try {
			const response = await axios.get(`${baseUrl}/episode`);
			return response.data.results;
		} catch (error: any) {
			return error.message;
		}
	});
export const CharactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCharacters.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchCharacters.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchCharacters.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default CharactersSlice.reducer;
