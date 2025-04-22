import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { isOpenDetail, setIsOpenDetail, setDataDetail, dataDetail } = props;
  const onClose = () => {
    setIsOpenDetail(false);
    setDataDetail(null);
  };
  if (!dataDetail) return null;
  return (
    <>
      <Drawer
        width={"40vw"}
        title="View Detail"
        onClose={onClose}
        open={isOpenDetail}
      >
        <p>Id: {dataDetail._id}</p>
        <br />
        <p>Full Name: {dataDetail.fullName}</p>
        <br />
        <p>Email: {dataDetail.email}</p>
        <br />
        <p>Phone: {dataDetail.phone}</p>
        <br />
        <div
          style={{ width: "150px", height: "100px", border: "1px solid #ccc" }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
              dataDetail.avatar
            }`}
            alt=""
          />
        </div>
        <div>
          <label
            htmlFor="btnUpload"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              marginTop: "20px",
              background: "#4CAF50",
              color: "white",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Upload file
          </label>
          <input type="file" hidden id="btnUpload" />
        </div>
      </Drawer>
    </>
  );
};
export default ViewUserDetail;
