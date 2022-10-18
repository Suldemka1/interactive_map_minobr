import {configureStore} from "@reduxjs/toolkit";
import typesReducer from './slices/typesSlice'

export const store = () => configureStore({
    name: 'types',
    reducer: {
        types: typesReducer
    }
})