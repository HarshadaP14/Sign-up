import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log("data :", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { title, image, price, description, category } = data;

  return (
    <>
      <div
        style={{
          textDecoration: "none",
          color: "black",
          //   background: "cyan",
          padding: "5px",
          display: "flex",
        }}
      >
        <img src={image} alt="Product" style={{ width: "200px" }} />
        <h3>{id}</h3>
        <h3>{title}</h3>
        <h3
          style={{
            padding: "10px 10px",
          }}
        >
          {price}
        </h3>
        <p>{description}</p>
        <h3>{category}</h3>
      </div>
    </>
  );
};
export default SingleProduct;
