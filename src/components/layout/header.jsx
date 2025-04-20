import {
  UserSwitchOutlined,
  HomeOutlined,
  SwitcherOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
