import { configureStore } from '@reduxjs/toolkit'
import persistReducer from '../_reducers/index';
export default configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})