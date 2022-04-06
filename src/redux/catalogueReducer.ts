import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catalogueAPI } from "./API/API";

export const getCatalogue = createAsyncThunk(
  "catalogue/getCatalogue",
  async (_, { dispatch }) => {
    const response = await catalogueAPI.getCatalogue();
    dispatch(setCatalogue(response));
  }
);

const setLoadingTrue = (state: any) => {
  state.isLoading = true;
};

const setLoadingFalse = (state: any) => {
  state.isLoading = false;
};

export const catalogueReducer = createSlice({
  name: "catalogue",
  initialState: {
    isLoading: false,
    catalogueList: [],
    pagesCount: 1,
  },
  reducers: {
    setCatalogue: (state, action) => {
      state.catalogueList = action.payload;
    },
    setPagesCount: (state, action) => {
      state.pagesCount = state.catalogueList.length / action.payload;
    },
    setItemsInStock: (state) => {
      state.catalogueList = state.catalogueList.filter((item: any) => {
        if (item.quantity_available > 0) {
          return item;
        }
      });
    },
  },
  /*  extraReducers: {
    [getCatalogue.pending]: setLoadingTrue,
    [getCatalogue.fulfilled]: setLoadingFalse,
  }, */
});

export const { setCatalogue, setPagesCount, setItemsInStock } =
  catalogueReducer.actions;
export default catalogueReducer.reducer;
