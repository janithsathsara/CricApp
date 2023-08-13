import { createSlice } from '@reduxjs/toolkit';


const liveSlice = createSlice({
    name: 'live',
    initialState: {
        value: false
    },
    reducers: {
        toggleLive: state => {
            state.value = !state.value;
        },
    }
})

export const { toggleLive } = liveSlice.actions;
export default liveSlice.reducer;