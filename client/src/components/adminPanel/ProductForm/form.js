import React from "react";
import classes from "./form.module.css";
import "antd/dist/antd.css";
import "./customAnt.css";
import { Link, Redirect } from "react-router-dom";
import { Form, Input, InputNumber, Button, message } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
import adminPanelMiddleWare from "../../../redux/middlewares/adminPaneldata/adminProductData";
import { set } from "lodash";
// import { STATES } from "mongoose";
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const key = "updatable";
const CPForm = (props) => {
  const [productValue, setproductValue] = useState({
    Pname: "",
    counter: null,
    description: "",
  });
  // const [rdirect, setrdirect] = useState(false);
  const [price, setproductPriceValue] = useState();
  const [cardImage, setcardImage] = useState();
  const handleValueChange = (e) => {
    setproductValue({ ...productValue, [e.target.name]: e.target.value });
  };
  // const onFinish = (values) => {
  //   console.log(values);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    let Pname = productValue.Pname;
    let description = productValue.description;
    let counter = productValue.counter;
    setTimeout(() => {
      return productValue.Pname == "" ||
        productValue.description == "" ||
        productValue.counter == null ||
        cardImage == null ||
        price == null
        ? message.error({ content: "fill required field", key, duration: 2 })
        : message.success({ content: "saved", key, duration: 2 }) &&
            props.dispatchData({
              Pname,
              description,
              counter,
              price,
              cardImage,
            });
    }, 1000);
  };
  const handleValueChange1 = (e) => {
    console.log(e);
    setproductPriceValue(e);
  };
  const RedirectCom = () => {
    return props.iscreatedDataload ? (
      <Redirect to="/admin/product" />
    ) : (
      <Redirect to="/admin/form" />
    );
  };
  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setcardImage(e.target.files[0]);
  };
  console.log(productValue);
  return (
    <div>
      {RedirectCom()}{" "}
      <div className={classes.formNavDiv}>
        <h1 className={classes.heading}>Create product</h1>
      </div>
      <div className={classes.formWholeDiv}>
        <Form
          {...layout}
          name="nest-messages"
          // onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Product Name"
            rules={[
              {
                required: true,
              },
            ]}

            // onValuesChange
          >
            <Input
              name="Pname"
              value={productValue.Pname}
              onChange={handleValueChange}
              required
            />
          </Form.Item>
          <Form.Item
            name={["product", "price"]}
            label="Price"
            rules={[
              {
                type: "number",
                min: 0,
                required: true,
                // max: 99,
              },
            ]}
          >
            <InputNumber value={price} required onChange={handleValueChange1} />
          </Form.Item>
          <Form.Item name={["user", "Counter"]} label="counter">
            <Input
              name="counter"
              value={productValue.counter}
              placeholder="counter Should be 1"
              onChange={handleValueChange}
            />
          </Form.Item>
          <Form.Item name={["user", "description"]} label="Description">
            <Input.TextArea
              value={productValue.description}
              name="description"
              onChange={handleValueChange}
              required
            />
          </Form.Item>
          <Form.Item label="Upload Picture">
            <input type="file" onChange={handleImageChange} required />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="save" onClick={handleSubmit}>
              Save
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Link to="/admin/product">
              <Button type="primary" htmlType="save">
                Back to Product Page
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchData: (data) => {
      dispatch(adminPanelMiddleWare.cardsData(data));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    iscreatedDataload: state.dataReducer.iscreatedDataload,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CPForm);
