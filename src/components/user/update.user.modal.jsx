import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateUserApi } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const {
    isOpenUpdateModal,
    setIsOpenUpdateModal,
    dataUpdate,
    setDataUpdate,
    getAllUser,
  } = props;

  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);
  const handleSubmitBtn = async () => {
    const res = await updateUserApi(id, fullName, phone);
    if (res.data) {
      notification.success({
        message: "Update User",
        description: "Cập nhật user thành công",
      });
      resetAndCloseModal();
      await getAllUser();
    } else {
      notification.error({
        message: "Error update user",
        description: JSON.stringify(res.message),
      });
    }
  };
  const resetAndCloseModal = () => {
    setIsOpenUpdateModal(false);
    setId("");
    setFullName("");
    setPhone("");
    setDataUpdate(null);
  };
  return (
    <Modal
      title="Update User"
      open={isOpenUpdateModal}
      onOk={() => {
        handleSubmitBtn();
      }}
      onCancel={() => {
        resetAndCloseModal();
      }}
      maskClosable={false}
      okText={"Save"}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>

        <div>
          <span>Phone number</span>
          <Input
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
      </div>
    </Modal>
  );
};
export default UpdateUserModal;
