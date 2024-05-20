import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import CreateUSer from "./createUser/CreateUSer";

const Admin = () => {
  return (
    <div className="admin__content">
      <div className="sidebar">
        <NavLink className="link" to={"/"}>
          Home
        </NavLink>
        <NavLink className="link" to={"createUser"}>
          Create User
        </NavLink>
        <NavLink className="link" to={"manageUser"}>
          Manage User
        </NavLink>
        <NavLink className="link" to={"createProduct"}>
          Create Product
        </NavLink>
        <NavLink className="link" to={"manageProduct"}>
          Manage Product
        </NavLink>
      </div>
      <div className="cards">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
