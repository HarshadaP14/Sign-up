import React from "react";
import GetCategory from "./GetCategory";
import { Routes, Route } from "react-router-dom";
import CateDetails from "./CateDetails";
import SingleProduct from "./SingleProduct";

const RouteCate = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "300px", padding: "10px" }}>
          <h2 style={{ color: "white" }}>Category</h2>
          <GetCategory />
        </div>
        <div>
          <h2> Products</h2>
          <Routes>
            <Route path="/:cat" element={<CateDetails />} />
            <Route path="/:cat/:id" element={<SingleProduct />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default RouteCate;
