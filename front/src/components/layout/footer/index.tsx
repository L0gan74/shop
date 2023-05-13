import React from "react";
import logo from "../../../assets/logo.svg";

import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="footer-link">
        <Link to="/favorites">Избранное</Link>
        <Link to="/favorites">Корзина</Link>
      </div>
      <a href="#">будут ссылки на соц сети</a>
    </footer>
  );
};

export default Footer;
