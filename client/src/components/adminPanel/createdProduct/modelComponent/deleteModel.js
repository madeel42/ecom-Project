import React from "react";
import { Modal } from "antd";
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
      <h1>Are you sure you want to delete?</h1>
    </Modal>
  );
};
