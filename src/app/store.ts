import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import movieReducer from '../features/movie/movieSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
