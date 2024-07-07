import React from "react";
import Home from "./pages/Home";
import Layout from "./Layout";
import ShopCart from "./pages/ShopCart";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop-cart" element={<ShopCart />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
