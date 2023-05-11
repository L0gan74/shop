import React from "react";

import style from "./style.module.css";
import main from "../../../assets/main.png";

const Banner = () => {
  return (
    <div className={style.banner}>
      <h1>Аксессуары для Iphone 13 Pro Max</h1>
      <img src={main} alt="main banner" />
    </div>
  );
};

export default Banner;
