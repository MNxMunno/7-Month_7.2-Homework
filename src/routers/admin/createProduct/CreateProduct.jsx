import React, { useEffect, useState } from "react";
import { usePostProductsMutation } from "../../../context/api/productApi";
let initalState = {
  title: "",
  description: "",
  price: "",
};

const CreateProduct = () => {
  let [createProduct, { isLoading, isSuccess }] = usePostProductsMutation();
  const [newProduct, setNewProduct] = useState(initalState);
  useEffect(() => {
    if (isSuccess) {
      setNewProduct(initalState);
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(newProduct);
  };

  return (
    <div>
      <h2>CreateProduct</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          name=""
          id=""
          placeholder="Title"
        />
        <input
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, description: e.target.value }))
          }
          type="text"
          name=""
          id=""
          required
          placeholder="Description"
        />
        <input
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, price: e.target.value }))
          }
          type="number"
          name=""
          id=""
          required
          placeholder="Price"
        />
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
