import React, { useEffect } from "react";
import classes from "./products.module.css";
import CardComponent from "./cardComponent";
import { connect } from "react-redux";
// import data from "./data";
import { useState } from "react";
const cardperShow = 10;
let arrayForHoldingCards = [];
const Products = (props) => {
  const [next, setnext] = useState(15);
  const handleShowMorePosts = () => {
    setnext(next + 3);
  };
  console.log(props.data, "store");
  return (
    <div className={classes.productContent}>
      {/* cardToShow={props.data} */}
      <CardComponent visibleitem={next} />
      <div className={classes.loadMoreBtnDiv}>
        <button
          className={` ${
            next >= props.data.length ? classes.hideBtn : classes.loadMoreBtn
          }`}
          onClick={handleShowMorePosts}
        >
          {/* onClick={handleShowMorePosts} */}
          Load more
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.dataReducer.data1,
  };
};
export default connect(mapStateToProps, null)(Products);
