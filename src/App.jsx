import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Wishlist from "./routers/wishlist/Wishlist";
import Home from "./routers/home/Home";
import Admin from "./routers/admin/Admin";
import "./scss/main.scss";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Users from "./context/users/Users";
import CreateUser from "./routers/admin/createUser/CreateUSer";
import ManageUser from "./routers/admin/manageUser/ManageUser";
import CreateProduct from "./routers/admin/createProduct/CreateProduct";
import ManageProduct from "./routers/admin/manageProduct/ManageProduct";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="createUser" element={<CreateUser />} />
          <Route path="manageUser" element={<ManageUser />} />
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="manageProduct" element={<ManageProduct />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
