import React from "react";
import { Modal } from "antd";
import classes from './del.module.css'
export const ConfirmDelete = ({
  confirmModelopen,
  handleDeleteCancelModel,
  handleDelete
}) => {
  return (
    <Modal
      title="Confirm"
      visible={confirmModelopen}
      onOk={handleDelete}
      closable={false}
      onCancel={handleDeleteCancelModel}
    >
      <div className={classes.confirmDivHeading}><h1>Are you sure you want to delete?</h1></div>
    </Modal>
  );
};
