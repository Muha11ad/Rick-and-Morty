import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://rickandmortyapi.com/api";


export interface CharacterStatus {
	[key: string]: any;
}
export const initialState: CharacterStatus = {
	singleCharacter : {},
	status : "idle",
	error : undefined,
};

export interface fetchSingleCharacterProps {
	idOfCharacter: any;
}
export const fetchSingleCharacter = createAsyncThunk(
	"character/fetchCharacter",
	async ({ idOfCharacter }: fetchSingleCharacterProps ) => {
		try {
			const response = await axios.get(`${baseUrl}/character/${idOfCharacter}`) 
			return response.data
		} catch (error: any) {
			return error.message;
		}
	}
);

export const CharacterSlice = createSlice({
	name: "character",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchSingleCharacter.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchSingleCharacter.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.singleCharacter = action.payload;
			})
			.addCase(fetchSingleCharacter.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	}
});

export default CharacterSlice.reducer;
