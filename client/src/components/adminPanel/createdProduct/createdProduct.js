import React, { useEffect, useState } from "react";
import classes from "./product.module.css";
import { connect } from "react-redux";
import { Card, message } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import adminProductData from "../../../redux/middlewares/adminPaneldata/adminProductData";
import ModalComponent from "./modelComponent/model";
import { json } from "body-parser";
// import img11 from "../../productpart/assets/img11.jpg";
const key = "updatable";
const { Meta } = Card;
const CreatedProdComp = (props) => {
  const [visible, setVisible] = useState(false);
  const [deleteRender, setdeleteRender] = useState(false);
  const [selectedValue, setselectedValue] = useState({
    Pname: "",
    price: null,
    counter: null,
    description: "",
    file: null,
  });
  useEffect(() => {
    props.dispatchData();
  }, [visible, deleteRender]);
  const showModal = (item) => {
    setVisible(true);
    // console.log(item);
    setselectedValue(item);
  };
  const updateDataSubmit = () => {
    message.loading({ content: "updating...", key });
    setTimeout(() => {
      return selectedValue.Pname == "" ||
        selectedValue.description == "" ||
        selectedValue.counter == null ||
        selectedValue.file == null ||
        selectedValue.price == null
        ? message.error({ content: "fill required field", key, duration: 2 })
        : message.success({
            content: "updated successfully",
            key,
            duration: 2,
          }) && props.dispatchDataUpdate(selectedValue);
    }, 1000);

    // props.dispatchDataUpdate(selectedValue);
    // setupdateMessage(dataUpdatedMessage)
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleDelete = (item) => {
    props.dispatchDeleteData(item);
    let eFlag = deleteRender === false ? true : false;
    setdeleteRender(eFlag);
  };
  console.log(selectedValue, "modeiten");
  // console.log()
  console.log(deleteRender, "render");
  return (
    <div>
      <div className={classes.prodDivHeading}>
        <h1>products created by admin</h1>
      </div>
      <div className={classes.mainCardDiv}>
        {props.updatedData.map((item, index) => {
          return (
            <div className={classes.cardStyle}>
              <Card
                hoverable
                className={classes.CardsOriginal}
                cover={
                  <img
                    alt="example"
                    className={classes.coverImg}
                    src={item.file}
                  />
                }
              >
                <div>
                  <Meta title={item.Pname} description="1pc(s)" />
                </div>
                <div className={classes.EndDiv}>
                  <p className={classes.PriceStyle}>{item.price}$</p>
                  <div>
                    <button
                      className={classes.dellButton}
                      onClick={() => handleDelete(item)}
                    >
                      dell
                    </button>
                    <button
                      className={classes.updateBtn}
                      onClick={() => showModal(item)}
                    >
                      update
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
        <div>
          <Link to="/admin/form">
            <button className={classes.createPButton}>
              <span className={classes.textDiv}>create Product</span>
            </button>
          </Link>
        </div>
        <ModalComponent
          visible={visible}
          updateDataSubmit={updateDataSubmit}
          setselectedValue={setselectedValue}
          selectedValue={selectedValue}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchData: (data) => {
      dispatch(adminProductData.getProductData());
    },
    dispatchDataUpdate: (data) => {
      dispatch(adminProductData.updateProductData(data));
    },
    dispatchDeleteData: (data) => {
      dispatch(adminProductData.deleteProduct(data));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    updatedData: state.dataReducer.data1,
    // updatedData: [
    //   {
    //     id: 0,
    //     image1: img11,
    //     image2: img11,
    //     image3: img11,
    //     image4: img11,
    //     counter: 1,
    //     title: "Magnetic Designs Women Printed Fit And Flare Dress",
    //     price: "5$",
    //     description:
    //       "Mauve printed knitted fit and flare dress,\
    //                has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    //   },
    //   {
    //     id: 0,
    //     image1: img11,
    //     image2: img11,
    //     image3: img11,
    //     image4: img11,
    //     counter: 1,
    //     title: "Magnetic Designs Women Printed Fit And Flare Dress",
    //     price: "5$",
    //     description:
    //       "Mauve printed knitted fit and flare dress,\
    //                has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    //   },
    //   {
    //     id: 0,
    //     image1: img11,
    //     image2: img11,
    //     image3: img11,
    //     image4: img11,
    //     counter: 1,
    //     title: "Magnetic Designs Women Printed Fit And Flare Dress",
    //     price: "5$",
    //     description:
    //       "Mauve printed knitted fit and flare dress,\
    //                has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    //   },
    //   {
    //     id: 0,
    //     image1: img11,
    //     image2: img11,
    //     image3: img11,
    //     image4: img11,
    //     counter: 1,
    //     title: "Magnetic Designs Women Printed Fit And Flare Dress",
    //     price: "5$",
    //     description:
    //       "Mauve printed knitted fit and flare dress,\
    //                has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    //   },
    //   {
    //     id: 0,
    //     image1: img11,
    //     image2: img11,
    //     image3: img11,
    //     image4: img11,
    //     counter: 1,
    //     title: "Magnetic Designs Women Printed Fit And Flare Dress",
    //     price: "5$",
    //     description:
    //       "Mauve printed knitted fit and flare dress,\
    //                has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
    //   },

    // ],
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatedProdComp);
