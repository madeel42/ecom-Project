import React, { useEffect, useState } from "react";
import classes from "./product.module.css";
import { connect } from "react-redux";
import { Card, message } from "antd";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { Link, Redirect } from "react-router-dom";
import adminProductData from "../../../redux/middlewares/adminPaneldata/adminProductData";
import ModalComponent from "./modelComponent/model";
import { ConfirmDelete } from "./modelComponent/deleteModel";
// import img11 from "../../productpart/assets/img11.jpg";
const key = "updatable";
const { Meta } = Card;
const CreatedProdComp = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmModelopen, setconfirmModelopen] = useState(false);
  // const [deleteRender, setdeleteRender] = useState(false);
  const [updateRender, setupdateRender] = useState(false);
  const [selectedValue, setselectedValue] = useState({
    Pname: "",
    price: null,
    counter: null,
    description: "",
    file: null,
  });
  const [selectDeleteValue, setselectDeleteValue] = useState();
  useEffect(() => {
    props.dispatchData();
  }, [updateRender]);
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
    let upadateFlag = updateRender === false ? true : false;
    setVisible(false);
    setupdateRender(upadateFlag);
  };
  const handleDelete = (item) => {
    let upadateFlag = updateRender === false ? true : false;
    // message.loading({ content: "Loading...", key });
    // setTimeout(() => {
    //   message.success({ content: "delete successfully!", key, duration: 2 });
    //   setupdateRender(upadateFlag);
    // }, 2000);
      setupdateRender(upadateFlag);
    props.dispatchDeleteData(item);
    setconfirmModelopen(false);
  };
  // const showConfirmModel = (item) => {
  //   setconfirmModelopen(true);
  //   setselectDeleteValue(item);
  // };
  // const handleDeleteCancelModel = () => {
  //   let upadateFlag = updateRender === false ? true : false;
  //   setconfirmModelopen(false);
  //   setupdateRender(upadateFlag);
  // };
  // if (props.isloading) {
  //   return (
  //     <div>
  //       {" "}
  //       <Spin className={classes.spinnerAdmin} size="large" tip="Loading..." />
  //     </div>
  //   );
  // } else {
    return (
      <div>
        <div className={classes.prodDivHeading}>
          <h1>products created by admin</h1>
        </div>
        <div className={classes.mainCardDiv}>
          {props.updatedData.map((item, index) => {
            return (
              <div className={classes.cardStyle} key={item._id}>
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
                        onClick={() => {
                          handleDelete(item);
                          // showConfirmModel(item);
                        }}
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
          {/* <ConfirmDelete
            confirmModelopen={confirmModelopen}
            handleDeleteCancelModel={handleDeleteCancelModel}
            handleDelete={handleDelete}
          /> */}
        </div>
      </div>
    );
  // }
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
    isloading: state.dataReducer.isloading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatedProdComp);
