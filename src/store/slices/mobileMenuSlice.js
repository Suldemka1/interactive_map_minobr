import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
}

export const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = !state.isOpen

      if (state.isOpen === true) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "unset";
      }
    }
  }
})

export const { setIsOpen } = mobileMenuSlice.actions
export default mobileMenuSlice.reducer