import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null
}

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload
    }
  }
})

const reducer = {
  state: sliceState.reducer
}

export const { setUser } = sliceState.actions
export default reducer
