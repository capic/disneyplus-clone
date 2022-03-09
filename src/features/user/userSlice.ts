import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../types'

const initialState: IUser = {
  photo: null,
  email: null,
  name: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state: Draft<IUser>, action: PayloadAction<IUser>) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.photo = action.payload.photo
    },
    setSignOutState: (state: Draft<IUser>) => {
      state.name = null
      state.email = null
      state.photo = null
    },
  },
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions
export default userSlice.reducer
