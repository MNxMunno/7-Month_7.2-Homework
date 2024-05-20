import React from "react";
import Cart from "../../../static/cart/Cart";
import { useGetUsersQuery } from "../../../context/api/userApi";

const ManageUser = () => {
  const { data } = useGetUsersQuery();
  return (
    <div>
      <h2>ManageUser</h2>
      <Cart isAdmin={true} data={data} />
    </div>
  );
};

export default ManageUser;
