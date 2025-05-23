import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.service";

const UserForm = (props) => {
  const { getAllUser } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmitBtn = async () => {
    const res = await createUserApi(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "Create User",
        description: "Tạo user thành công",
      });
      resetAndCloseModal();
      await getAllUser();
    } else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };
  const resetAndCloseModal = () => {
    setIsOpen(false);
    setFullName("");
    setEmail("");
    setPassWord("");
    setPhone("");
  };
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <Modal
        title="Create User"
        open={isOpen}
        onOk={() => {
          handleSubmitBtn();
        }}
        onCancel={() => {
          resetAndCloseModal();
        }}
        maskClosable={false}
        okText={"Create"}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
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
            <span>Email</span>
            <Input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Password</span>
            <Input.Password
              value={password}
              onChange={(event) => {
                setPassWord(event.target.value);
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

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table User</h3>
        <Button type="primary" onClick={() => setIsOpen(true)}>
          Create User
        </Button>
      </div>
    </div>
  );
};
export default UserForm;
