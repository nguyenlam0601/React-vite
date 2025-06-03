import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";

const LoginPages = () => {
  const [form] = Form.useForm();
  const onFinish = async (value) => {
    console.log(value);
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
              <Input.Password />
            </Form.Item>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button type="primary">Login</Button>
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
