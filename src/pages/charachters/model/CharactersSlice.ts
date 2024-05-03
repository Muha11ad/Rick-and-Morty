import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://rickandmortyapi.com/api";

//interfaces start
export interface CharactersDetailsStatus {
	data: { info: { [key: string]: string | number }; results: any[] };
	statusOfData: string;
	error: undefined | string;
	radio: boolean;
	name: string;
	status: string;
	specy: string;
	gender: string;
	speciesArray: string[];
	genderArray: string[];
	statusesArray: string[];
}
export interface SingleHeroState {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		ulr: string;
	};
	location: {
		name: string;
		ulr: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
}
export interface ResponseState {
	data: { info: { [key: string]: string | number }; results: any[] };
	status: string;
	error: undefined | string;
}
export interface fetchCharactersState {
	query: string;
	activePage?: number;
	name: string;
	characterStatus: string;
	specy: string;
	gender: string;
}
//interfaces endpoint
export const initialState: CharactersDetailsStatus = {
	data: { info: {}, results: [] },
	statusOfData: "idle",
	error: undefined,
	radio: true,
	name: "",
	status: "",
	specy: "",
	gender: "",
	speciesArray: [
		"human",
		"alien",
		"robot",
		"humanoid",
		"poopybotthole",
		"mythological",
		"animal",
		"unknown",
		"planet",
		"cronenberg",
		"disease",
	],

	genderArray: ["male", "female", "genderless", "unknown"],
	statusesArray: ["alive", "dead", "unknown"],
};

export const fetchCharacters = createAsyncThunk(
	"characters/fetchCharacters",
	async ({
		query,
		activePage,
		name,
		characterStatus,
		specy,
		gender,
	}: fetchCharactersState) => {
		try {
			const response = await axios.get(
				`${baseUrl}/${query}/?page=${activePage}&name=${name}&status=${characterStatus}&species=${specy}&gender=${gender}`
			);
			return response.data;
		} catch (error: any) {
			return error.message;
		}
	}
);

export const CharactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
		getByName(state, action) {
			state.name = action.payload;
		},
		getByStatus(state, action) {
			state.status = action.payload;
		},
		getBySpecy(state, action) {
			state.specy = action.payload;
		},
		getByGender(state, action) {
			state.gender = action.payload;
		},
		checkRadio(state, action) {
			state.radio = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchCharacters.pending, (state) => {
				state.statusOfData = "loading";
			})
			.addCase(fetchCharacters.fulfilled, (state, action) => {
				state.statusOfData = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchCharacters.rejected, (state, action) => {
				state.statusOfData = "failed";
				state.error = action.error.message;
			});
	},
});

export const { getByGender, getByStatus, getBySpecy, getByName, checkRadio } =
	CharactersSlice.actions;
export default CharactersSlice.reducer;
