import { useState } from "react";
import Products from "../../../components/products/Products";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Cart from "../../../static/cart/Cart";

const ManageProduct = () => {
  const { data } = useGetProductsQuery();
  return (
    <div>
      <h2>ManageUser</h2>
      <Cart isAdmin={true} data={data} />
    </div>
  );
};

export default ManageProduct;
