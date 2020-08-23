import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import "./modelcutom.css";
import { ReactComponent as Cart } from "./../cart/cartasset/cart-minus.svg";
import classes from "./cardsModel.module.css";
import cardComclasses from "./../cardsCom.module.css";
import { connect } from "react-redux";
import Gallery from "./../cardsModel/galleryPic/galleryPic";

const CardsModel = (props) => {
  console.log(props);
  const {
    visible,
    setvisible,
    item,
    draweritem,
    modelItemIndex,
    decrementFun,
    drawercallback,
    Draweritem,
    getCardClass,
    itemNumberFun,
    getCardClass1,
  } = props;
  console.log(item);
  console.log(drawercallback);
  const [show, setShow] = useState(false);
  const tab1Active = () => {
    setShow(true);
  };
  console.log(draweritem ? draweritem : "");
  return (
    <div>
      <Modal
        width="740px"
        visible={visible}
        footer={null}
        onCancel={() => setvisible(false)}
      >
        <div className={classes.mainDiv}>
          <div className={classes.firstDiv}>
            <Gallery
              modelItem={item ? item.file : ""}
              // modelItem1={item ? item.image2 : ""}
              // modelItem2={item ? item.image3 : ""}
              // modelItem3={item ? item.image4 : ""}
            />
          </div>
          <div className={classes.secondDiv}>
            <div className={classes.secondContentDiv}>
              <div>
                <h1 className={classes.modelItemHeading}>
                  {item ? item.Pname : ""}
                </h1>
                <p className={classes.contentModelproductNumber}>1 pc(s)</p>
                <p className={classes.contentModelDescription}>
                  {item ? item.description : ""}
                </p>
                <div className={cardComclasses.cardsEndDiv}>
                  <button
                    onClick={() => {
                      itemNumberFun(1);
                      Draweritem(item);
                    }}
                    className={getCardClass(item)}
                  >
                    {" "}
                    <Cart />
                    <span>cart</span>{" "}
                  </button>
                  <div className={getCardClass1(item)}>
                    <button
                      className={cardComclasses.plusbutton}
                      onClick={() => Draweritem(item)}
                    >
                      +
                    </button>
                    <span>{item ? item.counter : ""}</span>
                    <button
                      className={cardComclasses.minusButton}
                      onClick={() => {
                        decrementFun(item);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <div className={classes.priceDiv}>{item ? item.price : ""}</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    item: state.dataReducer.modelItem,
  };
};
export default connect(mapStateToProps, null)(CardsModel);
