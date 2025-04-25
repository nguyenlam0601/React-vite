import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from "react";
import { getUserApi } from "../services/api.service";

const UserPages = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getAllUser();
  }, [current, pageSize]);
  const getAllUser = async () => {
    const res = await getUserApi(current, pageSize);
    if (res.data) {
      setDataUsers(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <UserForm getAllUser={getAllUser} />
        <UserTable
          dataUsers={dataUsers}
          getAllUser={getAllUser}
          current={current}
          pageSize={pageSize}
          total={total}
          setCurrent={setCurrent}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
};
export default UserPages;
