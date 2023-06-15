import { ICat } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  categories: ICat[];
  count: number;
}

const initialState: CategoryState = {
  categories: [],
  count: 0
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    plus(state, action: PayloadAction<number>) {
      state.count += action.payload
    }
  }
});

export default categorySlice.reducer;