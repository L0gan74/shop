import React from "react";

import logo from "../../../assets/logo.svg";
import like from "../../../assets/like.svg";
import basket from "../../../assets/basket.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="nav">
        <Link to="/favorites">
          <img src={like} alt="like" />
          <span>2</span>
        </Link>
        <Link to="/favorites">
          <img src={basket} alt="basket" />
          <span>2</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
