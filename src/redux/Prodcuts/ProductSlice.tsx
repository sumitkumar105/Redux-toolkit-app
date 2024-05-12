import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface Products {
  user: any[];
  status: boolean;
  error: any;
}

const initialState: Products = {
  users: [],
  status: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("product/fetchUsers", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export default ProductSlice.reducer;
