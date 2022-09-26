import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetCategory = () => {
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        console.log("user :", res.data);
        SetUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section>
        {Array.isArray(users) &&
          users.map((user, i) => (
            <div key={user}>
              <h2>
                <Link
                  to={`/${user}`}
                  style={{
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontSize: "20px",
                    color: "black",
                    // background: "cyan",
                    padding: "2px",
                  }}
                >
                  {user}
                </Link>
              </h2>
            </div>
          ))}
      </section>
    </>
  );
};
export default GetCategory;
