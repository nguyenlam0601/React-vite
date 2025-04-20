import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { isOpenDetail, setIsOpenDetail, setDataDetail, dataDetail } = props;
  const onClose = () => {
    setIsOpenDetail(false);
    setDataDetail(null);
  };
  if (!dataDetail) return null;
  return (
    <>
      <Drawer title="View Detail" onClose={onClose} open={isOpenDetail}>
        <p>Id: {dataDetail._id}</p>
        <br />
        <p>Full Name: {dataDetail.fullName}</p>
        <br />
        <p>Email: {dataDetail.email}</p>
        <br />
        <p>Phone: {dataDetail.phone}</p>
        <br />
      </Drawer>
    </>
  );
};
export default ViewUserDetail;
