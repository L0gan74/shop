import React from "react";
import logo from "../../../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" />
      <div className="footer-link">
        <a href="#">Избранное</a>
        <a href="#">Корзина</a>
        <a href="#">Контакты</a>
      </div>
      <a href="#">Условия сервиса</a>
      <a href="#">будут ссылки на соц сети</a>
    </footer>
  );
};

export default Footer;
