import { http } from "./../config/axios";

type Product = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export const getAllProduct = () => {
  return http.get("http://localhost:3000/products");
};

export const getProductDetail = (id: string) => {
  return http.get("http://localhost:3000/products/" + id);
};

export const deleteProduct = (id: number) => {
  return http.delete("http://localhost:3000/products/" + id);
};
export const addProduct = (data: Product) => {
  return http.post("http://localhost:3000/products/", data);
};

export const editProductDetail = (id: string, data: Product) => {
  return http.put("http://localhost:3000/products/" + id, data);
};
