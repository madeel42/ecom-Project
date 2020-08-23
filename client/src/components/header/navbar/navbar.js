import React from "react";
import classes from "./navbar.module.css";
import AppLogo from "./../../assets/app-logo.png";
import MenuBar from "./../../assets/menu-bars-icon.png";
import { useState } from "react";
import { ReactComponent as SearchIcon } from "./asssets/search-line.svg";
import { ReactComponent as BackArrow } from "./asssets/long-arrow-left.svg";
import {SearchContext} from './../useContext'
import { useContext } from "react";
// import { ReactComponent as PicBazar } from "./../../assets/picbazar-logo.svg";
const Navbar = () => {
  const [show, setshow] = useState(false);
  const [showfield, setshowfield] = useState(false);
  const {setsearch,search,clickHandle,setsearchProduct} = useContext(SearchContext)
  const showdrawer = () => {
    setshow(true);
  };
  const close = () => {
    setshow(false);
  };
  const handleSearchInput = () => {
    setshowfield(true);
  };
  const handleSearchInputClose= () => {
    setshowfield(false)
    setsearch("")
    
  }
  const allProduchShowHandler = () => {
    setsearchProduct("")
    setsearch("")
    console.log("adada")
  }
  return (
    <div>
      <div className={`${classes.wrapper1} ${showfield ? classes.wrapper : classes.wrapper1}`}>
        <div className={classes.contentWrappr}>
          <button className={classes.backarrowDiv} onClick={handleSearchInputClose }>
            <BackArrow />
          </button>
          <span className={classes.spanGrocery}>Grcoery</span>

          <input

            className={classes.inputbox}
            type="text"
            placeholder="Search your product from here"
            name=""
            id=""
            value={search}
            onChange={e => setsearch(e.target.value)}
          />
          <button className={classes.SearchIconDiv} onClick={clickHandle}>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className={classes.mainNavbardiv}>
        <SearchIcon
          className={classes.Searchicon}
          onClick={handleSearchInput}
        />
        <img src={AppLogo} className={classes.applogo} onClick={allProduchShowHandler} alt="" />
        <img
          src={MenuBar}
          onClick={showdrawer}
          className={classes.MenuBar}
          alt=""
        />
        <ul className={show ? classes.ulListShow : classes.ulList}>
          <button className={classes.ulListClosebtn} onClick={close}>
            x
          </button>
          <li>Offer</li>
          <li>Need Help</li>
          <li>About</li>
          <li className={classes.checkout}>Checkout</li>
          <li>
            <button>Join</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
