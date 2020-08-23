import React from "react";
import classes from "./sidebar.module.css";
import { ReactComponent as WomanMendress } from "./assets/black-female-dress-icon.svg";
import {ReactComponent as Outwear} from './assets/men-suit.svg' 
import {ReactComponent as Pant} from './assets/jeans-pants.svg'
import {ReactComponent as Dress} from './assets/dress.svg'
import {ReactComponent as WomanDress} from './assets/woman-shirt.svg'

const SideBar = () => {
  return (
    <div className={classes.SideBarWrapper}>
      <div className={classes.contentDiv}>
        <ul>
          <li><div className={classes.listItemDiv}> <span className={classes.logoIconwomendresses}> <WomanMendress/></span> <p>Woman Dress</p></div> </li>
          <li><div className={classes.listItemDiv}> <span className={classes.logoIconwomendresses}> <Outwear/></span> <p>Outer Wear</p></div></li>
          <li><div className={classes.listItemDiv}> <span className={classes.logoIconwomendresses}> <Pant/></span> <p>Pants</p></div></li>
          <li><div className={classes.listItemDiv}> <span className={classes.logoIconwomendresses}> <Dress/></span> <p>Skirts</p></div></li>
          <li><div className={classes.listItemDiv}> <span className={classes.logoIconwomendresses}> <WomanDress/></span> <p>Shirts</p></div></li>



          {/* <li><span className={classes.logoIconwomendresses}> <Outwear/></span>Out wear</li>
          <li><span className={classes.logoIconwomendresses}> <Pant/></span>Pant</li>
          <li>Tops</li>
          <li>Skirts</li>
          <li>Shirts</li> */}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
