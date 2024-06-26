import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import React from "react";
import { useState, useEffect } from "react";
import useWindow from "../../hooks//UseWindow/useWindow";
function Products() {
  let [products, setProducts] = useState([]);
  console.log("products")
  console.log(useWindow());
  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
      (response) => {
        return response.json();
      }
    ).then((res) => {
      console.log(res);
      setProducts(res);
    })
  }, [])
    return (
      <div>
          <div><Effect /></div>
            {
                products.map(function (item, index) {
                  return (<ProductCard key={index}  product={item} />)
                })
            }
        </div>
    )
}

export let a = 10;
export let b = 20;
export default React.memo(Products);
