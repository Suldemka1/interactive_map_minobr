import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "details/fetchData",
  async (id) => {
    const res = await fetch(`${process.env.REACT_APP_BASEURL}/api/datalist/id/${id}`)
      .then(res => res.json())
    console.log(res)
    return res
  }
)