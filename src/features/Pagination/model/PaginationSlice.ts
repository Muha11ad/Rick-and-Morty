import { createSlice,  PayloadAction } from "@reduxjs/toolkit";

export interface SelectedPageStatus {
    selected : number
}

export const initialState: SelectedPageStatus = {
    selected : 1
};
export const PaginationSlice = createSlice({
	name: "page",
	initialState,
	reducers: {
        getPage (state, action : PayloadAction<number>) {
           state.selected = action.payload 
        }
    },
});

export const { getPage } = PaginationSlice.actions
export default PaginationSlice.reducer;
