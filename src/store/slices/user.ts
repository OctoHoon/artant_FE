import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";

export interface UserType {
  id: number;
  email: string;
  password: string;
  name: string;
  logged_in: boolean;
}
export interface UserState {
  users: UserType[];
  logged_in: boolean;
  selectedUser: UserType | null;
}

const initialState: UserState = {
  users: [],
  logged_in: false,
  selectedUser: null,
};

export const fetchUsers = createAsyncThunk("article/fetchUsers", async () => {
  const response = await axios.get<UserType[]>("/api/v1/user/");
  return response.data;
});

export const setLogIn = createAsyncThunk(
  "user/setLogIn",
  async (targetEmail: UserType["email"], { dispatch }) => {
    await axios.patch("/api/user/1/", { logged_in: true });
    dispatch(userActions.setLogIn({ targetEmail: targetEmail }));
  }
);

export const setLogOut = createAsyncThunk(
  "user/setLogOut",
  async (targetEmail: UserType["email"], { dispatch }) => {
    await axios.patch("/api/user/1/", { logged_in: false });
    dispatch(userActions.setLogOut({ targetEmail: targetEmail }));
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn: (state, action: PayloadAction<{ targetEmail: string }>) => {
      const user = state.users.find(
        (value) => value.email === action.payload.targetEmail
      );
      if (user) {
        user.logged_in = true;
      }
      state.logged_in = true;
    },
    setLogOut: (state, action: PayloadAction<{ targetEmail: string }>) => {
      const user = state.users.find(
        (value) => value.email === action.payload.targetEmail
      );
      if (user) {
        user.logged_in = false;
      }
      state.logged_in = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const userActions = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
