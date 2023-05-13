import React from "react";

import logo from "../../../assets/logo.svg";
import like from "../../../assets/like.svg";
import basket from "../../../assets/basket.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  // @ts-ignore
  const { items } = useSelector((state) => state.cart);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("item", json);
    }
    isMounted.current = true;
  }, [items]);

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
        <Link to="/basket">
          <img src={basket} alt="basket" />
          <span>{totalCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
