import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import { deleteUserApi } from "../../services/api.service";
//import DeleteUserModal from "./delete.user.modal";

const UserTable = (props) => {
  const { dataUsers, getAllUser } = props;
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState(null);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              setIsOpenDetail(true);
              setDataDetail(record);
            }}
          >
            {record._id}
          </a>
        </>
      ),
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setIsOpenUpdateModal(true);
              setDataUpdate(record);
            }}
            style={{ cursor: "pointer", color: "orange" }}
          />
          <Popconfirm
            title="Delete user"
            description="Are you sure to delete this user?"
            onConfirm={() => {
              handleDeleteBtn(record._id);
            }}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];
  const handleDeleteBtn = async (id) => {
    const res = await deleteUserApi(id);
    if (res.data) {
      notification.success({
        message: "Delete User",
        description: "Xóa user thành công",
      });
      await getAllUser();
    } else {
      notification.error({
        message: "Error delete user",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateUserModal
        setIsOpenUpdateModal={setIsOpenUpdateModal}
        isOpenUpdateModal={isOpenUpdateModal}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        getAllUser={getAllUser}
      />
      <ViewUserDetail
        isOpenDetail={isOpenDetail}
        setIsOpenDetail={setIsOpenDetail}
        setDataDetail={setDataDetail}
        dataDetail={dataDetail}
      />
    </>
  );
};
export default UserTable;
