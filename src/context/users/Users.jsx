import React from "react";
import Cart from "../../static/cart/Cart";
import { useGetUsersQuery } from "../api/userApi";

const Users = () => {
  const { data } = useGetUsersQuery();
  console.log(data);

  return (
    <div style={{ paddingTop: "40px" }}>
      <Cart data={data} />
    </div>
  );
};

export default Users;
