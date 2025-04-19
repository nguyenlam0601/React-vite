import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { getUserApi } from "../../services/api.service";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);
  useEffect(() => {
    GetAllUser();
  }, []);
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  const GetAllUser = async () => {
    const res = await getUserApi();
    setDataUsers(res.data);
  };
  //GetAllUser();
  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};
export default UserTable;
