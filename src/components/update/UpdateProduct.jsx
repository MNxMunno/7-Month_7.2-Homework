import React, { useEffect } from "react";
import { usePutProductsMutation } from "../../context/api/productApi";

const UpdateUser = ({ data, editUser }) => {
  const [updateProduct, { isLoading, isSuccess }] = usePutProductsMutation();
  useEffect(() => {
    if (isSuccess) {
      editUser(null);
    }
  }, [isSuccess]);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    let user = {
      title: data.title,
      price: data.price,
    };
    updateProduct({ body: user, id: data.id });
  };
  return (
    <>
      <div className="edit__overlay"></div>
      <form onSubmit={handleUpdateUser} className="edit__wrapper">
        <h3>Update</h3>
        <input
          value={data?.title}
          onChange={(e) => editUser((p) => ({ ...p, title: e.target.value }))}
          type="text"
        />

        <input
          value={data?.price}
          onChange={(e) => editUser((p) => ({ ...p, price: e.target.value }))}
          type="number"
        />
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Save"}
        </button>
        <button type="button" onClick={() => editUser(null)}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default UpdateUser;
