import React, { useState } from "react";
import VerticalCard from "./VerticalCard";
import useFeaturedPost from "../hooks/useFeaturedPost";
import { useDispatch, useSelector } from "react-redux";
import { setFeaturedPosts } from "../redux/featuredPostSlice";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect } from "react";
import FilterBar from "./FilterBar";
const FeaturedPostSection = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("status");
  

  const { data, totalData, loading, error } = useFeaturedPost(
    page,
    limit,
    sortOrder,
    sortBy,
  );
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(setFeaturedPosts(data));
  }, [data]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <div className="bg-red-600 p-5 rounded-md my-4">
      <FilterBar
       
      />
      <div className="gap-y-5 gap-x-4 grid md:grid-cols-3 sm:grid-cols-2   flex justify-center items-center place-items-center">
        {data.map((post, i) => (
          <VerticalCard
            key={i}
            title={post.title}
            description={post.description}
            cardUrl={"#"}
            imgUrl=""
          />
        ))}
        {data.length > 0 && totalData - page * limit > 0 && (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="col-span-full flex justify-center bg-white px-4 py-2 rounded-full w-full text-black items-center text-xl"
          >
            Load More
            <RiArrowDropDownLine className="text-[30px]" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedPostSection;
