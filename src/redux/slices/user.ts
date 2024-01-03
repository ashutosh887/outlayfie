import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  user: any;
  userLoading: Boolean;
}

const initialState: UserState = {
  user: null,
  userLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<Boolean>) => {
      state.userLoading = action.payload;
    },
  },
});

export const {setUser, setUserLoading} = userSlice.actions;

export default userSlice.reducer;
