import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import { useDispatch } from "react-redux";
import "./Header.scss";
import { setLoader, setSearchTerm } from "../../redux/movies/actions";

const Header = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(term));
    dispatch(setLoader(true));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        {" "}
        <Link to="/" className="logo">
          <img
            src="https://nayaningale.vercel.app/static/media/lightlogo.768e0e38.png"
            alt=""
          />{" "}
          Movie App{" "}
        </Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default Header;
