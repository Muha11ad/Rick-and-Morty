import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import PaginationReducer from "../../features/Pagination/model/PaginationSlice.js"
import CharactersReducer from "../../pages/charachters/model/CharactersSlice.js"
import CharacterReducer from "../../pages/character/model/CharacterSlice"
import EpisodeReducer from "../../pages/episode/model/EpisodeSlice.js"
import LocationReducer from "../../pages/location/model/LocationSlice.js"
export const store = configureStore({
    reducer: {
        page :  PaginationReducer,
        characters :  CharactersReducer,
        character : CharacterReducer,
        episode : EpisodeReducer,
        location : LocationReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
export const useAppSelector = useSelector.withTypes<RootState>()