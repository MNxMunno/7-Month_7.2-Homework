import React, { useEffect, useState } from "react";
import { usePostUsersMutation } from "../../../context/api/userApi";

let initalState = {
  firsname: "",
  lastname: "",
  age: "",
};
const CreateUSer = () => {
  let [createUser, { isLoading, isSuccess }] = usePostUsersMutation();
  const [newUser, setNewUser] = useState(initalState);
  useEffect(() => {
    if (isSuccess) {
      setNewUser(initalState);
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(newUser);
  };

  return (
    <div>
      <h2>CreateUSer</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          value={newUser.firsname}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, firsname: e.target.value }))
          }
          type="text"
          name=""
          id=""
          placeholder="First name"
        />
        <input
          value={newUser.lastname}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, lastname: e.target.value }))
          }
          type="text"
          name=""
          id=""
          placeholder="Last name"
          required
        />
        <input
          value={newUser.age}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, age: e.target.value }))
          }
          type="number"
          name=""
          id=""
          required
          placeholder="Age"
        />
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateUSer;
