import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface HeartState {
    status: boolean;
}

const initialState: HeartState = {
    status: false,
};

const heartSlice = createSlice({
    name: 'heart',
    initialState,
    reducers: {
        removeHeart: (state, action: PayloadAction<{ status: boolean }>) => {
            const { status } = action.payload;
            state.status = status;
        },
    },
    extraReducers: (builder) => {
        // Xử lý các action khác nếu cần
    },
});

export default heartSlice.reducer;
export const { removeHeart } = heartSlice.actions;
