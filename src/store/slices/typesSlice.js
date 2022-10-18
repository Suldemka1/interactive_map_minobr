import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    podved: false,
    spo: false,
    dop: false,
    school: false,
    dou: false,

    trosta: false,
    cos: false,
    kvant: false,
    itcube: false,
    mastery: false
}

export const typesSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {
        getState: (state, action) => {
            state[action.payload] = !state[action.payload]
        },

        setState: (state, action) => {
            state.trosta = false
            state.cos = false
            state.kvant = false
            state.itcube = false
            state.mastery = false

            state[action.payload] = !state[action.payload]
        },

        setProps: (state, action) => {
            state.podved = false
            state.spo = false
            state.dop = false
            state.school = false
            state.dou = false
            state.trosta = false
            state.cos = false
            state.kvant = false
            state.itcube = false
            state.mastery = false
            console.log(state)

            state[action.payload] = !state[action.payload]
        }
    }
})

export const {setState, setProps, getState} = typesSlice.actions
export default typesSlice.reducer