import React, { useState } from "react";
import "../index.css";
const Icon = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClicked, setmenuClicked] = useState(false);

  const update = () => {
    if (!menuClicked) {
      setBurgerClass("burger-bar clicked");
    } else {
      setBurgerClass("burger-bar unclicked");
    }
    setmenuClicked(!menuClicked);
  };
  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={update}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
    </div>
  );
};

export default Icon;
