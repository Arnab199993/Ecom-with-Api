import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
const ProductList = (props) => {
  const [state, setstate] = useState([]);
  const callapi = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data.products);
      setstate(response.data.products);
    }).catch((err) => {
      console.log(err);
    });
  };
  useEffect(() => {
    callapi();
  }, []);
  return (
    <div className="row">
      ProductList
      {
        state.map((ele) => {
          return <Product image={ele.thumbnail} title={ele.title} text={ele.description} key={ele.id} />
        })
      }
    </div>
  );
};
export default ProductList;
