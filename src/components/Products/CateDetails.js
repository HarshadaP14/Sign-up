import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CateDetails = () => {
  const [product, setProduct] = useState({});
  const { cat } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => {
        console.log("Products :", res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cat]);

  return (
    <div>
      <section>
        {Array.isArray(product) &&
          product.map(
            ({ id, title, image, price, description, category }, i) => (
              <div
                key={id}
                style={{
                  border: "1px solid black",
                  padding: "20px 20px",
                  marginBottom: "22px",
                }}
              >
                <Link
                  to={`/cat/${id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    // background: "cyan",
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
                </Link>
              </div>
            )
          )}
      </section>
    </div>
  );
};
export default CateDetails;
