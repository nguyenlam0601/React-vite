import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  notification,
  Row,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPages = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const onFinish = async (value) => {
    setLoading(true);
    const res = await loginApi(value.email, value.password);
    if (res.data) {
      message.success("Đăng nhập thành công");
      localStorage.setItem("access_token", res.data.access_token);
      setUser(res.data.user);
      navigate("/");
    } else {
      notification.error({
        message: "Thông báo đăng nhập",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
  };
  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}>
          <legend>Đăng Nhập</legend>
          <Form
            name="basic"
            layout="vertical"
            form={form}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true },
                { type: "email", message: "Email không đúng định dạng" },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}>
              <Input.Password
                onKeyDown={(e) => {
                  if (e.key === "Enter") form.submit();
                }}
              />
            </Form.Item>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                loading={loading}
                onClick={() => form.submit()}
                type="primary">
                Login
              </Button>
              <Link to={"/"}>Go to hompage -&gt; </Link>
            </div>
          </Form>
          <Divider />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>
              Chưa có tài khoản? <a>Đăng ký tại đây</a>
            </p>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};
export default LoginPages;
