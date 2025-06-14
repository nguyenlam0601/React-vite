import { useRouteError, Link } from "react-router-dom";
import { Button, Result } from "antd";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Result
      status="404"
      title="Oops!"
      subTitle={error.statusText || error.message}
      extra={
        <Button type="primary" key="console">
          <Link to="/">
            <span>Back To HomePage</span>{" "}
          </Link>
        </Button>
      }
    />
  );
}
