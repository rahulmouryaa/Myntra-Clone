import React from "react";
import { BsFillPersonFill, BsHandbag } from "react-icons/bs"; // Profile Icon
import { AiOutlineHeart } from "react-icons/ai"; // Wishlist Icon
import { FaSearch } from "react-icons/fa"; // Search Icon
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  console.log(bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">WOMEN</a>
        <a href="#">KIDES</a>
        <a href="#">Home & Living</a>
        <a href="#">BEAUTY</a>
        <a href="#">
          STUDIO
          <sup>NEW</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className=" search_icon material-symbols-outlined ">
          <FaSearch />
        </span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <AiOutlineHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <BsHandbag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
