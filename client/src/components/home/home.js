import React from "react";
import Navbar from "../header/navbar/navbar";
import Header from "../header/header";
import classes from "./home.module.css";
import Carosul from "./../carosul/slickCarosul";
import MainProducts from "./../productpart/productsmain";
import DrawerCom from '../Drawer/drawer'
const Home = () => {
  return (
      <div className={classes.mainDivWrapper}>
        <header>
          <Navbar />
          <Header />
        </header>
        <div className={classes.CarosulWrapper}>
          <Carosul />
        </div>
        <div>
          <MainProducts />
        </div>
        {/* <div><DrawerCom/></div> */}
      </div>
  );
};
export default Home;
