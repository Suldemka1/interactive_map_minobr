import { configureStore } from "@reduxjs/toolkit";
import typesReducer from './slices/typesSlice'
import mobileMenuSlice from "./slices/mobileMenuSlice";
import detailsSlice from "./slices/detailsSlice"

export const store = () => configureStore({
    name: 'types',
    reducer: {
        types: typesReducer,
        mobile: mobileMenuSlice,
        details: detailsSlice
    }
})