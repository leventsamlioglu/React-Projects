import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton />
      </div>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
