import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";

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
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </div>
      ),
    },
  ];

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
