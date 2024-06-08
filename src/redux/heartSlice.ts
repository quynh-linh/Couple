import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface HeartState {
    uid: string;
    isLoading: boolean;
    msg: string;
}

const initialState: HeartState = {
    uid: '',
    isLoading: false,
    msg: '',
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        removeHeart: (state, action: PayloadAction<{ uid: string; message: string }>) => {
            const { uid, message } = action.payload;
            state.uid = uid;
            state.msg = message;
        }
    },
    extraReducers: (builder) => {
        // ================= SIGN UP =================
        // builder.addCase(signUpUser.pending, (state, action) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(signUpUser.fulfilled, (state, action) => {
        //     const { message, uid } = action.payload;
        //     console.log(action.payload);
        //     state.isLoading = false;
        //     state.uid = uid;
        //     state.msg = message;
        // });
        // builder.addCase(signUpUser.rejected, (state, action) => {
        //     state.isLoading = true;
        // });
    }
});
 
export default authSlice.reducer;
export const { removeHeart} = authSlice.actions;
