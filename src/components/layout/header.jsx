import {
  UserSwitchOutlined,
  HomeOutlined,
  SwitcherOutlined,
  SettingOutlined,
  LoginOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { Menu, message } from "antd";
import { useContext } from "react";
import { Children, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { logOutApi } from "../../services/api.service";
const Header = () => {
  const [current, setCurrent] = useState("mail");
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(">>>check ", user);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const handleLogOut = async () => {
    const res = await logOutApi();
    if (res.data) {
      // clear data
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      });
      message.success("Đăng xuất thành công");
      navigate("/");
    }
  };
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/user">Users</Link>,
      key: "user",
      icon: <UserSwitchOutlined />,
    },

    {
      label: <Link to="/book">Books</Link>,
      key: "book",
      icon: <SwitcherOutlined />,
    },
    ...(!user.id
      ? [
          {
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),

    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "setting",
            icon: <AliwangwangOutlined />,
            children: [
              {
                label: <span onClick={() => handleLogOut()}>Đăng xuất</span>,
                key: "logout",
              },
            ],
          },
        ]
      : []),
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
