import {
  UserSwitchOutlined,
  HomeOutlined,
  SwitcherOutlined,
  SettingOutlined,
  LoginOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useContext } from "react";
import { Children, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
const Header = () => {
  const [current, setCurrent] = useState("mail");
  const { user } = useContext(AuthContext);
  console.log(">>>check ", user);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
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
                label: "Đăng xuất",
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
