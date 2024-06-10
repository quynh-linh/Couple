import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
        initHearts: (state, action: PayloadAction<{ status: boolean }>) => {
            const { status } = action.payload;
            localStorage.setItem('enable', JSON.stringify(status));
            state.status = status;
        },
        removeHearts: (state, action: PayloadAction<{ status: boolean }>) => {
            const { status } = action.payload;
            localStorage.removeItem('enable');
            localStorage.setItem('isRemoved', JSON.stringify(true));
            state.status = status;
        },
    },
    extraReducers: (builder) => {
        // Xử lý các action khác nếu cần
    },
});

export default heartSlice.reducer;
export const { removeHearts, initHearts } = heartSlice.actions;
