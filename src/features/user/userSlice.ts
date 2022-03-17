import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../types'

const initialState: { user: IUser | null } = { user: null }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (
      state: Draft<{ user: IUser | null }>,
      action: PayloadAction<{ user: IUser }>
    ) => {
      state.user = action.payload.user
    },
    setSignOutState: (state: Draft<{ user: IUser | null }>) => {
      state.user = null
    },
  },
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions
export default userSlice.reducer
