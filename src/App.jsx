import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu/Menu";
import Product from "./Menu/Product/Product";
import Customers from "./Menu/Customers/Customers";
import Purchases from "./Menu/Purchases/Purchases";
import EditProducts from "./Menu/Product/EditProducts";
import EditCustomers from "./Menu/Customers/EditCustomers";
import AddProduct from "./Menu/Product/AddProduct";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Menu />} />
        <Route path="products" element={<Product />} />
        <Route path="customers" element={<Customers />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="/editProducts/:id" element={<EditProducts />} />
        <Route path="/EditCustomers/:id/:name" element={<EditCustomers />} />
        <Route path="addproduct/:id/:name" element={<AddProduct />} />
      </Routes>
    </div>
  );
}
