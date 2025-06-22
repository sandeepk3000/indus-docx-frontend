import React, { useEffect, useState } from "react";
import RTE from "./RTE";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

const EditorTabContent = ({ post }) => {
  const [content, setContent] = useState("");
  const { control, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      content: post?.content || "HELLO",
    },
  });
  const submit = (data) => {
    if (post) {
      console.log("update post", data);
    } else {
      console.log("create post", data);
    }
  };
  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(submit)}>
        <RTE className="" name="content" control={control} label={"Content"} />
      </form>
    </div>
  );
};

export default EditorTabContent;
