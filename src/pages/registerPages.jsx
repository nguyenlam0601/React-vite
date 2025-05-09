import { Button, Form, Input } from "antd";

const registerPages = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <Form name="basic" form={form} layout="vertical" onFinish={onFinish}>
        <div
          style={{
            margin: "20px",
          }}
        >
          <Form.Item label="Full Name" name="fullName">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Phone Number" name="phone">
            <Input />
          </Form.Item>
          <div>
            <Button type="primary" onClick={() => form.submit()}>
              Create User
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};
export default registerPages;
