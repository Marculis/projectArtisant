import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catalogueAPI } from "./API/API";

export const getCatalogue = createAsyncThunk(
  "catalogue/getCatalogue",
  async (_, { dispatch }) => {
    const response = await catalogueAPI.getCatalogue();
    dispatch(setCatalogue(response));
  }
);

export const catalogueReducer = createSlice({
  name: "catalogue",
  initialState: {
    catalogueList: [],
    catalogueListInStock: [],
    pagesCount: 1,
    pageSize: 20,
  },
  reducers: {
    setCatalogue: (state, action) => {
      state.catalogueList = action.payload;
    },
    setPagesCount: (state) => {
      state.pagesCount = state.catalogueList.length / state.pageSize;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setItemsInStock: (state) => {
      state.catalogueList = state.catalogueList.filter((item: any) => {
        if (item.quantity_available > 0) {
          return item;
        }
      });
      state.pagesCount = state.catalogueList.length / state.pageSize;
    },
  },
});

export const { setCatalogue, setPagesCount, setPageSize, setItemsInStock } =
  catalogueReducer.actions;
export default catalogueReducer.reducer;
