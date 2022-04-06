import { configureStore } from "@reduxjs/toolkit";
import catalogueReducer from "./catalogueReducer";

export default configureStore({
  reducer: {
    catalogue: catalogueReducer,
  },
});
