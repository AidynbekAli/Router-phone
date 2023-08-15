import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products";
import { MyCart } from "../pages/MyCart";
import { MyOrder } from "../pages/MyOrder";
import { DetaliProduct } from "../pages/DetaliProduct";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<DetaliProduct />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="mycart/:myorderId" element={<MyOrder />} />
      </Routes>
    </div>
  );
};
