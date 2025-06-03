import { Button, Input, Form, notification, Row, Col, Divider } from "antd";
import { registerUserApi } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (value) => {
    console.log(value);
    const res = await registerUserApi(
      value.fullName,
      value.email,
      value.password,
      value.phone
    );
    if (res.data) {
      notification.success({
        message: "Đăng ký User",
        description: "Đăng ký thành công",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Đăng ký user",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <Form
      name="basic"
      style={{ margin: "0 auto", width: "80%", paddingTop: "50px" }}
      layout="vertical"
      form={form}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <h3 style={{ textAlign: "center" }}>Đăng ký tài khoản</h3>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Phone number"
            name="phone"
            rules={[
              {
                required: true,
                pattern: new RegExp(/\d+/g),
                message: "Wrong format!",
              },
            ]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => form.submit()} type="primary">
              Register
            </Button>
          </div>
          <Divider />
          <div>
            Đã có tài khoản? <Link to={"/login"}>Đăng nhập tại đây</Link>
          </div>
        </Col>
      </Row>
    </Form>
  );
};
export default RegisterPage;
