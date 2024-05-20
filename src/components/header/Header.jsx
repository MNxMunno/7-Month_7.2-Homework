import React from "react";
import { FaHeart, FaHome, FaShoppingCart, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import logo_2 from "../../assets/images/logo_2.svg";
import { GrContact } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { RiAdminFill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink className="logo_2" to={"/"}>
            <img src={logo_2} alt="" />
          </NavLink>
          <div className="nav__items">
            <NavLink className="link_par" to={"/"}>
              <FaHome className="icon" />
              <p className="link">Home</p>
            </NavLink>
            <NavLink className="link_par" to={"/users"}>
              <FaUsers className="icon" />
              <p className="link">Users</p>
            </NavLink>
            <NavLink className="link_par" to={"/wishlist"}>
              <FaHeart className="icon" />
              <p className="link">Wishlist</p>
            </NavLink>
            <NavLink className="logo" to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
            <NavLink className="link_par" to={"/admin"}>
              <RiAdminFill className="icon" />
              <p className="link">Admin</p>
            </NavLink>
          </div>
          <div className="nav__btns">
            <form>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search Product"
              />
              <CiSearch className="search_icon" />
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
