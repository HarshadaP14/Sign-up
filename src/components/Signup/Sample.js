import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sample = () => {
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("user :", res.data);
        SetProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    products &&
    products.map((product) => (
      <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          padding: "10px",
          border: "1px solid grey",
          //   width: "30%",
          //   marginTop: "10",
          //   gap: "10",
        }}
      >
        {/* {product.name} */}
        <img
          src={product.image}
          alt={product.title}
          style={{ height: 200, objectFit: "cover" }}
        />
      </div>
    ))
  );
};
export default Sample;
