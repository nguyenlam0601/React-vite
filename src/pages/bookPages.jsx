import { useEffect, useState } from "react";
import BookTable from "../components/book/book.table";
import { getBookApi } from "../services/api.service";

const BookPages = () => {
  const [dataBooks, setDataBooks] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getAllBooks();
  }, [current]);
  const getAllBooks = async () => {
    const res = await getBookApi(current, pageSize);
    if (res.data) {
      setDataBooks(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <BookTable
        dataBooks={dataBooks}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
      />
    </div>
  );
};
export default BookPages;
