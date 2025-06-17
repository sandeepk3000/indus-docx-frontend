import { useState, useEffect } from "react";
import axios from "axios";
const useTrendingPost = () => {
  const [trendingPosts, setTrendingPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const url = "https://api.indusdocx.com/api/v1/trending-posts";
    axios
      .get(url)
      .then((res) => {
        setTrendingPost(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  });
  return { trendingPosts, loading, error };
};

export default useTrendingPost;
