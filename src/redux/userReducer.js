import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  last_name: null,
  email: null,
  id: null,
  telephone: null,
  is_admin: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setUser } = userReducer.actions;
export default userReducer.reducer;
