import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import loginSlice  from '../features/login/loginSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})