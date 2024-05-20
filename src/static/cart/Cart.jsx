import React from "react";
import { Link, useParams } from "react-router-dom";
import Wishlist from "../../routers/wishlist/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { toggleHeart } from "../../context/slice/wishlistSlice";
import { useDeleteUsersMutation } from "../../context/api/userApi";
import UpdateUser from "../../components/update/UpdateUser";
import { useDeleteProductsMutation } from "../../context/api/productApi";

const Cart = ({ data, isAdmin, editUser }) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  let dispatch = useDispatch();
  const [deleteUser, { isLoading }] = useDeleteUsersMutation();
  const [deleteProduct, { isSuccess }] = useDeleteProductsMutation();
  const handleDeleteUser = (id) => {
    deleteUser(id);
  };
  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };
  let card = data?.map((el) => (
    <div className="card" key={el.id}>
      <div className="content">
        <img src={el.url} alt={el.title} />

        {/* <img src={el.images[0]} alt={el.title} /> */}

        <div className="btns">
          <button onClick={() => dispatch(toggleHeart(el))}>
            {wishlist?.some((item) => item.id === el.id) ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button>
            <MdAddShoppingCart />
          </button>
          <button>
            <CiSearch />
          </button>
        </div>
      </div>
      <h1>{el.title}</h1>
      <h3>{el.firsname}</h3>
      <h3>{el.lastname}</h3>
      <p>{el.price}</p>
      <p>
        <b>{el.age}</b>
      </p>
      {isAdmin ? (
        <button className="delete" onClick={() => handleDeleteUser(el.id)}>
          delete
        </button>
      ) : (
        <></>
      )}
      {isAdmin ? (
        <button
          className="delete"
          style={{ background: "blue" }}
          onClick={() => handleDeleteProduct(el.id)}
        >
          delete
        </button>
      ) : (
        <></>
      )}
      {isAdmin ? (
        <button
          style={{
            padding: "5px 10px",
            background: "grey",
            color: "#fff",
            borderRadius: "8px",
            marginLeft: "10px",
          }}
          onClick={() => editUser(el)}
        >
          Edit
        </button>
      ) : (
        <></>
      )}
    </div>
  ));

  return (
    <>
      <section className="products">
        <div className="cards">{card}</div>
      </section>
    </>
  );
};

export default Cart;
