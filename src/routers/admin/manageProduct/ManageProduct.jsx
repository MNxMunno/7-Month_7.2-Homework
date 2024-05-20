import { useState } from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Cart from "../../../static/cart/Cart";
import UpdateProduct from "../../../components/update/UpdateProduct";

const ManageProduct = () => {
  const [editUser, setEditUser] = useState(null);
  const { data } = useGetProductsQuery();
  return (
    <div>
      <h2>ManageUser</h2>
      <Cart editUser={setEditUser} isAdmin={true} data={data} />
      {editUser ? (
        <UpdateProduct data={editUser} editUser={setEditUser} />
      ) : (
        <> </>
      )}
    </div>
  );
};

export default ManageProduct;
