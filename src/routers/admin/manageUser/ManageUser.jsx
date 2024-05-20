import React, { useState } from "react";
import Cart from "../../../static/cart/Cart";
import { useGetUsersQuery } from "../../../context/api/userApi";
import UpdateUser from "../../../components/update/UpdateUser";

const ManageUser = () => {
  const [editUser, setEditUser] = useState(null);
  const { data } = useGetUsersQuery();
  console.log(editUser);
  return (
    <div>
      <h2>ManageUser</h2>
      <Cart editUser={setEditUser} isAdmin={true} data={data} />
      {editUser ? (
        <UpdateUser data={editUser} editUser={setEditUser} />
      ) : (
        <> </>
      )}
    </div>
  );
};

export default ManageUser;
