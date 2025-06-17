import { useState, useEffect } from "react";
import axios from "axios";
const useLatestPost = (page, limit, sortBy, sortOrder) => {
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `https://f3e0de4a-8fcb-45fe-a17f-b8e2c30cbadb-00-27mes1dgw3d5a.pike.replit.dev:3000/api/v1/posts?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
  useEffect(() => {
    let ignore = false;
    axios
      .get(url)
      .then((response) => {
        if (!ignore) {
          setTotalData(response.data.data.totalData);
          setData((prev) => [...prev, ...response.data.data.posts]);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (!ignore) {
          setError(error);
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [page]);
  return { data, totalData, loading, error };
};
export default useLatestPost;
