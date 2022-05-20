import { IUser } from "../../models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";

interface UserState {
    users: IUser[],
    isLoading: boolean,
    error: string,
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.users = [];
            state.isLoading = false;
        },

    }
})

export default userSlice.reducer;
