import {
  UserSwitchOutlined,
  HomeOutlined,
  SwitcherOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Children, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [current, setCurrent] = useState("mail");
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
    {
      label: "Cài đặt",
      key: "setting",
      icon: <SettingOutlined />,
      children: [
        { label: <Link to="/login">Đăng nhập</Link>, key: "login" },
        { label: "Đăng xuất", key: "logout" },
      ],
    },
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
