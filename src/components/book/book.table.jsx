import { Table } from "antd";

const BookTable = (props) => {
  const { dataBooks, setPageSize, setCurrent, current, pageSize, total } =
    props;
  const onChange = (pagination) => {
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) {
        setCurrent(+pagination.current);
      }
    }
    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== +pageSize) {
        setPageSize(+pagination.pageSize);
      }
    }
  };
  const columns = [
    {
      title: "STT",
      render: (_, record, index) => (
        <>
          <div>{index + 1 + (current - 1) * pageSize}</div>
        </>
      ),
    },
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Tiêu đề",
      dataIndex: "mainText",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Action",
      key: "action",
    },
  ];
  return (
    <Table
      dataSource={dataBooks}
      columns={columns}
      pagination={{
        current: current,
        pageSize: pageSize,
        showSizeChanger: true,
        total: total,
        showTotal: (total, range) => {
          return (
            <div>
              {" "}
              {range[0]}-{range[1]} trên {total} rows
            </div>
          );
        },
      }}
      onChange={onChange}
    />
  );
};
export default BookTable;
