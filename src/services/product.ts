import { http } from "./../config/axios";

export const getAllProduct = () => {
  return http.get("http://localhost:3000/products");
};

export const getProductDetail = (id: string) => {
  return http.get("http://localhost:3000/products/" + id);
};

export const deleteProduct = (id: number) => {
  return http.delete("http://localhost:3000/products/" + id);
};
