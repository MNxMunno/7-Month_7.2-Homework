import React, { useEffect } from "react";
import { usePutUsersMutation } from "../../context/api/userApi";

const UpdateUser = ({ data, editUser }) => {
  const [updateUser, { isLoading, isSuccess }] = usePutUsersMutation();
  useEffect(() => {
    if (isSuccess) {
      editUser(null);
    }
  }, [isSuccess]);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    let user = {
      firsname: data.firsname,
      age: data.age,
      lastname: data.lastname,
    };
    updateUser({ body: user, id: data.id });
  };
  return (
    <>
      <div className="edit__overlay"></div>
      <form onSubmit={handleUpdateUser} className="edit__wrapper">
        <h3>Update</h3>
        <input
          value={data?.firsname}
          onChange={(e) =>
            editUser((p) => ({ ...p, firsname: e.target.value }))
          }
          type="text"
        />
        <input
          value={data?.lastname}
          onChange={(e) =>
            editUser((p) => ({ ...p, lastname: e.target.value }))
          }
          type="text"
        />
        <input
          value={data?.age}
          onChange={(e) => editUser((p) => ({ ...p, age: e.target.value }))}
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
