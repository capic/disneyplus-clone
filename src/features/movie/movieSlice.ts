import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { IMovie } from '../../types'

interface IAllMovies {
  recommends: IMovie[]
  news: IMovie[]
  originals: IMovie[]
  trendings: IMovie[]
}

const initialState: IAllMovies = {
  recommends: [],
  news: [],
  originals: [],
  trendings: [],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state: Draft<IAllMovies>, action: PayloadAction<IAllMovies>) => {
      state.recommends = action.payload.recommends
      state.news = action.payload.news
      state.originals = action.payload.originals
      state.trendings = action.payload.trendings
    },
  },
})

export const { setMovies } = movieSlice.actions
export default movieSlice.reducer
