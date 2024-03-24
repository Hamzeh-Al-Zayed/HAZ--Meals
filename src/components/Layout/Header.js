import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals2.jpg";
import HeaderCartButton from "../Layout/HeaderCartButton";
import logoImage from "../../assets/logo.png";

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <img src={logoImage} alt="logo image" className={classes.logo}></img>
        <h1>HAZ Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </React.Fragment>
  );
}

export default Header;
