import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import {
  handleUploadFile,
  updateAvatarUserApi,
} from "../../services/api.service";

const ViewUserDetail = (props) => {
  const {
    isOpenDetail,
    setIsOpenDetail,
    setDataDetail,
    dataDetail,
    getAllUser,
  } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const onClose = () => {
    setIsOpenDetail(false);
    setDataDetail(null);
  };
  if (!dataDetail) return null;
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleUploadUserAvatar = async () => {
    const resUpdLoad = await handleUploadFile(selectedFile, "avatar");
    if (resUpdLoad.data) {
      const newAvatar = resUpdLoad.data.fileUploaded;
      const resUpdateAvatar = await updateAvatarUserApi(
        newAvatar,
        dataDetail._id,
        dataDetail.fullName,
        dataDetail.phone
      );
      if (resUpdateAvatar.data) {
        setIsOpenDetail(false);
        setSelectedFile(null);
        setPreview(null);
        await getAllUser();
        notification.success({
          message: "Update user avatar",
          description: "Cập nhật avatar thành công",
        });
      } else {
        notification.error({
          message: "Error Upload File",
          description: JSON.stringify(resUpdLoad.message),
        });
      }
    } else {
      notification.error({
        message: "Error Upload File",
        description: JSON.stringify(resUpdLoad.message),
      });
    }
  };
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
          <input
            type="file"
            hidden
            id="btnUpload"
            onChange={(e) => {
              onSelectFile(e);
            }}
          />
        </div>
        {preview && (
          <>
            <div
              style={{
                width: "150px",
                height: "100px",
                marginTop: "10px",
                marginBottom: "15px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={preview}
                alt=""
              />
            </div>
            <Button type="primary" onClick={() => handleUploadUserAvatar()}>
              Save
            </Button>
          </>
        )}
      </Drawer>
    </>
  );
};
export default ViewUserDetail;
