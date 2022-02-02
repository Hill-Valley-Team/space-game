import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from 'api/Auth/types';
import { RootState } from 'store/types';

interface UserState {
  data: UserData | null;
}

const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserData>) {
      state.data = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.data;

export default userSlice.reducer;
