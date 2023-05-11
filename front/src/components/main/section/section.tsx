import React from "react";

import style from "./style.module.css";
import Wrapper from "./wrapper";

const Section: React.FC = () => {
  return (
    <div className={style.section}>
      <p className={style.title}>Чехлы</p>
      <Wrapper />
    </div>
  );
};

export default Section;
