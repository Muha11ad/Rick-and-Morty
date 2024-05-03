import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";

export interface LocationState {
	allLocations: { [key: string]: any };
	singleLocation: { [key: string]: any };
	residents: [];
	status: string;
	error: undefined | string;
	id: number;
}
export interface fetchLocationState {
	idOfLocation: number;
}

export const initialState: LocationState = {
	allLocations: {},
	singleLocation: {},
	residents: [],
	status: "idle",
	error: undefined,
	id: 1,
};
export const fetchLocation = createAsyncThunk(
	"location/fetchLocation",
	async ({ idOfLocation }: fetchLocationState) => {
		try {
			//fetching all episodes starts
			let nextPage = `${baseUrl}/location`;
			let allLocation: any = [];
			while (nextPage) {
				const getNextPage = await axios.get(nextPage);
				const { info, results } = getNextPage.data;
				allLocation = [...allLocation, ...results];
				nextPage = info.next;
			}
			//fetching all episodes ends
			const locationResponse = await axios.get(
				`${baseUrl}/location/${idOfLocation}`
			);
			//fetching residents API starts
			const residentsPromises = locationResponse.data.residents.map(
				(url: string) => axios.get(url)
			);
			const residentsResponse = await Promise.all(residentsPromises);
			const residentsData = residentsResponse.map((res) => res.data);
			//fetching residents API ends

			return {
				allLocation: allLocation,
				singleEpisode: locationResponse.data,
				residents: residentsData,
			};
		} catch (error: any) {
			return error.message;
		}
	}
);

export const LocationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		getLocation(state, action: PayloadAction<number>) {
			state.id = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchLocation.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchLocation.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.allLocations = action.payload.allLocation;
				state.singleLocation = action.payload.singleEpisode;
				state.residents = action.payload.residents;
			})
			.addCase(fetchLocation.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { getLocation } = LocationSlice.actions;
export default LocationSlice.reducer;
