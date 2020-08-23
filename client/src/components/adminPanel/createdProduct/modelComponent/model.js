import React from "react";
import { Modal, Button, Form, Input, InputNumber, message } from "antd";
import "antd/dist/antd.css";
import classes from "./modelcomp.module.css";
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not validate email!",
//     number: "${label} is not a validate number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };

const Model = (props) => {
  const { visible, handleCancel, selectedValue, setselectedValue,updateDataSubmit } = props;
  return (
    <>
      <Modal
        title="Update Item"
        visible={visible}
        footer={null}
        // onOk={this.handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="nest-messages"
          // onFinish={onFinish}
          // validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Product Name"
            // rules={[
            //   {
            //     required: true,
            //   },
            // ]}
            valuePropName={selectedValue.Pname}
            // onValuesChange
          >
            <Input
              name="Pname"
              value={selectedValue.Pname}
              onChange={(e) => {
                setselectedValue({ ...selectedValue, Pname: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item
            name={["product", "price"]}
            label="Price"
            rules={[
              {
                type: "number",
                min: 0,
                // max: 99,
              },
            ]}
            valuePropName={selectedValue.price}
          >
            <InputNumber
              value={selectedValue.price}
              onChange={(e) => {
                setselectedValue({ ...selectedValue, price: e });
              }}
            />
          </Form.Item>
          <Form.Item
            name={["user", "Counter"]}
            valuePropName={selectedValue.counter}
            label="counter"
          >
            <Input
              name="counter"
              placeholder="counter Should be 1"
              value={selectedValue.counter}
              onChange={(e) => {
                setselectedValue({ ...selectedValue, counter: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item
            name={["user", "description"]}
            valuePropName={selectedValue.description}
            label="Description"
          >
            <Input.TextArea
              name="description"
              value={selectedValue.description}
              onChange={(e) => {
                setselectedValue({
                  ...selectedValue,
                  description: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item label="Upload Picture" valuePropName={selectedValue.file}>
            <img src={selectedValue.file} className={classes.imgWidth} alt="" />
            <input
              type="file"
              onChange={(e) => {
                setselectedValue({ ...selectedValue, file: e.target.files[0] });
              }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="save" onClick={updateDataSubmit}>
              Save
            </Button>
          </Form.Item>
          {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Link to="/admin/product">
              <Button type="primary" htmlType="save">
                Back to Product Page
              </Button>
            </Link>
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
};
export default Model;
//   state = { visible: false };

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   handleCancel = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };
