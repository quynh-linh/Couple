import { get } from '@/libs/axiosConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface HeartState {
    status: boolean;
    isLoading: boolean;
    message: string;
    dataYear2023: any[];
    dataYear2024: any[];
}
interface FetchImageDataProps {
    years: number; // Assuming 'years' is a number
}

const initialState: HeartState = {
    status: false,
    isLoading: false,
    message: '',
    dataYear2023: [],
    dataYear2024: [],
};

// GET LIST POST BY USER ID
const findAllListImageByYears = createAsyncThunk('findAllListImageByYears', async (body: FetchImageDataProps) => {
    try {
        const res = await get(`api/firebase/urls/${body.years}`, null);
        const data = await res.data;
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});

const cloudinarySlice = createSlice({
    name: 'cloud',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // ================= ADD POST =================
        builder.addCase(findAllListImageByYears.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(findAllListImageByYears.fulfilled, (state, action) => {
            const { message, data, years } = action.payload;
            state.message = message;
            if (years === '2023') {
                state.dataYear2023 = data;
            }
            if (years === '2024') {
                state.dataYear2024 = data;
            }
            state.isLoading = false;
        });
        builder.addCase(findAllListImageByYears.rejected, (state, action) => {
            state.isLoading = true;
        });
    },
});

export default cloudinarySlice.reducer;
export const {} = cloudinarySlice.actions;
export { findAllListImageByYears };
