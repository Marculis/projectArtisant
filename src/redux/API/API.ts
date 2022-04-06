import axios from "axios";

const instance = axios.create({
  baseURL: "https://artisant.io/api/products",
  withCredentials: true,
});

export const catalogueAPI = {
  getCatalogue: () => {
    return instance.get("").then((response) => {
      return response.data.data.products;
    });
  },
};
