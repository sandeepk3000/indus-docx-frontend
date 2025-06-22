import React from "react";
import Dropzone from "./Dropzone";
import { useForm,Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
const MediaTabContent = (post) => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      thumbnail: post?.thumbnail || "",
    },
  });
  console.log(watch("thumbnail"))
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        
      </form>
    </div>
  );
};

export default MediaTabContent;
