import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from "react";
import { getUserApi } from "../services/api.service";

const UserPages = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);
  const getAllUser = async () => {
    const res = await getUserApi();
    setDataUsers(res.data);
  };
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <UserForm getAllUser={getAllUser} />
        <UserTable dataUsers={dataUsers} getAllUser={getAllUser} />
      </div>
    </div>
  );
};
export default UserPages;
