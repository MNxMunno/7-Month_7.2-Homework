import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import Cart from "../../static/cart/Cart";

const Products = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  return (
    <section className="products">
      <div className="container">
        <div className="cards">
          <Cart data={data} />
        </div>
      </div>
    </section>
  );
};

export default Products;
