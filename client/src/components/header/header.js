import React, { useState, useContext } from "react";
import classes from "./header.module.css"
import {SearchContext} from './useContext'
const Header = () => {
  // const [search,setsearch] = useState("adi")
  const search = useContext(SearchContext)
  return (
    <div className={classes.contentDiv}>
      <h1>Shop your designer dresses</h1>
      <p>
        Ready to wear dresses tailored for you from online. Hurry up while stock
        lasts.
      </p>
     <div className={classes.searchBoxWraper}>
         <span className={classes.serachSpan}>
             clothing
         </span>
         <div className={classes.searchbtnDiv}>
             <input type="text" value={search.search} onChange={e => search.setsearch(e.target.value)} placeholder="Search your products from here"  className={classes.searchName} name="" id=""/>
             <button onClick={search.clickHandle} className={classes.searchButton}>Search</button>
         </div>
     </div>
    </div>
  );
};
export default Header;
