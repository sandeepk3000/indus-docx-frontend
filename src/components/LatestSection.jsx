import React, { useEffect, useState } from "react";
import VerticalCard from "./VerticalCard";
import useLatestPost from "../hooks/useLatestPost";
import { useDispatch } from "react-redux";
import { setLatestPosts } from "../redux/latestPostSlice";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
const LatestSection = ({}) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");
  const { data, loading, error } = useLatestPost(page, limit, sortBy, order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLatestPosts(data));
  }, [data]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <ScrollArea className="md:h-150 p-4 rounded-md  bg-red-500">
      <div className="gap-5 flex flex-wrap-no justify-center md:flex-col md:justify-start whitespace-nowrap">
        {data.map((post, i) => (
          <VerticalCard
            key={i}
            title={post.title}
            description={post.description}
            cardUrl={"#"}
            imgUrl=""
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default LatestSection;
