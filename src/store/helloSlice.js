import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const helloSlice = createSlice({
    name: "hello",
    initialState, // devtools
    reducers: {}
});

// export const {} = helloSlice.actions;

export default helloSlice.reducer;