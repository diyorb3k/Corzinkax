import { create } from "zustand";

const initialState = [
  {
    id: 1,
    title: "Product",
    brand: "Brand 1",
    description: "lorem ipson dolor sit amet consectetur adip incled sayt",
    price: "23",
  },
  {
    id: 2,
    title: "Product",
    brand: "Brand 1",
    description: "lorem ipson dolor sit amet consectetur adip incled sayt",
    price: "23",
  },
  {
    id: 3,
    title: "Product",
    brand: "Brand 1",
    description: "lorem ipson dolor sit amet consectetur adip incled sayt",
    price: "23",
  },
];

export const useProductStore = create((set) => ({
  products: initialState, // Bu yerda products ni initialState ga o'rnatmoqdamiz
}));
