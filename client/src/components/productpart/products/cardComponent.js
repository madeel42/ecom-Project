import React, { useEffect } from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import cardComclasses from "./cardsCom.module.css";
import "./cardsCustom.css";
import ModelComponent from "./cardsModel/cardsModel";
import DrawerCom from "../../Drawer/drawer";
import { ReactComponent as Cart } from "./cart/cartasset/cart-minus.svg";
import classes from "./products.module.css";
import middleWare from "../../../redux/middlewares/middleWare";
import { connect } from "react-redux";
import { useState } from "react";
import { SearchContext } from "./../../header/useContext";
import { useContext } from "react";
import adminDataMiddleware from "./../../../redux/middlewares/adminPaneldata/adminProductData";
const { Meta } = Card;
const CardComponent = (props) => {
  const search = useContext(SearchContext);
  const [visible, setvisible] = useState(false);
  const [modelItemIndex, setmodelItemIndex] = useState();
  const { cardToShow, visibleitem } = props;
  useEffect(() => {
    props.getCardsProduct();
  }, []);
  const showModal = (item, index) => {
    setvisible(true);
    console.log(index);
    setmodelItemIndex(index);
    props.dispatchModelItem(item);
  };
  const handleOk = (e) => {
    setvisible(false);
  };
  const getCardClass = (item) => {
    return props.updatedData.find((obj) => obj._id === item._id)
      ? cardComclasses.cartsbuttonhide
      : cardComclasses.cartsbutton;
  };
  const getCardClass1 = (item) => {
    return props.updatedData.find((obj) => obj._id === item._id)
      ? cardComclasses.plUsMinusDivshow
      : cardComclasses.plUsMinusDiv;
  };
  const Draweritem = (item, index) => {
    props.dispatchData(item);
  };

  const decrementFun = (mainitem, index) => {
    console.log(index);
    props.dispatchDecrementData(mainitem, index);
  };

  const itemNumberFun = (item) => {
    props.itemLength(item);
  };
  const filterForEveryOne = (item) => {
    return item.filter((object) => {
      // console.log(object)
      // if(typeof text === 'string')
      const checkField =
        typeof object.Pname === "string" ? object.Pname.toLowerCase() : "";
      const filteredField = search.searchProduct.toLowerCase();
      return checkField.includes(filteredField);
    });
  };
  let filterArray = [];
  if (cardToShow && cardToShow.length > 0) {
    filterArray = filterForEveryOne(cardToShow);
  }
  return (
    <div className={classes.productList}>
      {filterArray.slice(0, visibleitem).map((item, index) => {
        return (
          <div className={classes.cardStyle}>
            <Card
              hoverable
              className={classes.CardsOriginal}
              cover={
                <img
                  alt="example"
                  className={cardComclasses.coverImg}
                  onClick={() => showModal(item, index)}
                  src={item.file}
                />
              }
            >
              <div>
                <Meta
                  title={item.Pname}
                  description="1pc(s)"
                  onClick={() => showModal(item, index)}
                />
              </div>
              <div className={cardComclasses.cardsEndDiv}>
                <p onClick={() => showModal(item, index)}>{item.price}$</p>
                <button
                  onClick={() => {
                    Draweritem(item, index);
                    itemNumberFun(1);
                  }}
                  className={getCardClass(item)}
                >
                  {" "}
                  <Cart />
                  <span>cart</span>{" "}
                </button>

                <div className={getCardClass1(item)}>
                  <button
                    onClick={() => {
                      Draweritem(item, index);
                    }}
                    className={cardComclasses.plusbutton}
                  >
                    +
                  </button>
                  <span>{item.counter}</span>
                  <button
                    className={cardComclasses.minusButton}
                    onClick={() => decrementFun(item, index)}
                  >
                    -
                  </button>
                </div>
              </div>
            </Card>
          </div>
        );
      })}

      <ModelComponent
        handleOk={handleOk}
        visible={visible}
        setvisible={setvisible}
        modelItemIndex={modelItemIndex}
        decrementFun={decrementFun}
        Draweritem={Draweritem}
        getCardClass={getCardClass}
        getCardClass1={getCardClass1}
        itemNumberFun={itemNumberFun}
      />

      <div>
        <DrawerCom
          draweritem={props.updatedData}
          decrementFun={decrementFun}
          cardToShow={cardToShow}
          Draweritem={Draweritem}
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCardsProduct: () => dispatch(adminDataMiddleware.getProductData()),
    dispatchData: (data) => dispatch(middleWare.addToCart(data)),
    dispatchDecrementData: (data, index) =>
      dispatch(middleWare.decrementFromCart(data, index)),
    itemLength: (data) => dispatch(middleWare.itemLengthFun(data)),
    dispatchModelItem: (data) => dispatch(middleWare.modelItem(data)),
  };
};
const mapStateToProps = (state) => {
  return {
    cardToShow: state.dataReducer.data1,
    // cardToShow: state.dataReducer.data,
    updatedData: state.dataReducer.drawerItem,
    updateActiveButton: state.dataReducer.isActive,
    updatedItemLength: state.dataReducer.itemLength,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);
