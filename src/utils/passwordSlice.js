import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
    name: "password",
    initialState: [],
    reducers: {
        addPasswords: (state, action) => {
            return state.concat(action.payload);
        },
        removePassword: (state, action) => {
            state = state.filter(
                (password) => password.title !== action.payload.title
            );
            return state;
        },
        clearPassword: (state, action) => {
            return [];
        },
    },
});

export const { addPasswords, removePassword, clearPassword } = passwordSlice.actions;

export default passwordSlice.reducer;
