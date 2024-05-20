import React from "react";
import Products from "../../components/products/Products";
import NotFound from "../../components/notFound/NotFound";
import { useSelector } from "react-redux";
import Cart from "../../static/cart/Cart";

const Wishlist = () => {
  let wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);
  return <>{wishlist.length ? <Cart data={wishlist} /> : <NotFound />}</>;
};

export default Wishlist;
