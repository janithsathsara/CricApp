import { configureStore } from '@reduxjs/toolkit'
import liveReducer from './liveSlice'
import iconReducer from './iconSlice'

export default configureStore({
    reducer: {
        live: liveReducer,
        icon: iconReducer,
    }
});
