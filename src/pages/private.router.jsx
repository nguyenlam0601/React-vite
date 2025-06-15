import { Children, useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const PrivateRouter = (props) => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return props.children;
  }
  return (
    <Result
      status="403"
      title="Unauthorize!"
      subTitle="Bạn cần đăng nhập để xem thông tin"
      extra={
        <Button type="primary" key="console">
          <Link to="/">
            <span>Back To HomePage</span>{" "}
          </Link>
        </Button>
      }
    />
  );
};
export default PrivateRouter;
