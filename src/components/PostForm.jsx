import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetaTabContent from "./MetaTabContent";
import EditorTabContent from "./EditorTabContent";
import MediaTabContent from "./MediaTabContent";
import PublishTabContent from "./PublishTabContent";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
const PostForm = ({ post = null }) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      title: post?.title || "",
      tags: "",
      category: post?.category || "",
      state: post?.state || "",
      city: post?.city || "",
      country: post?.country || "",
      content: post?.content || "",
      media: post?.thumbnail || "",
    },
  });
  console.log();
  return (
    <Tabs defaultValue="meta" className="w-full bg-blue-600">
      <TabsList className="w-full rounded-none">
        <TabsTrigger value="meta">Meta</TabsTrigger>
        <TabsTrigger value="editor">Content</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
        <TabsTrigger value="publish">Publish</TabsTrigger>
      </TabsList>
      <div className="flex gap-4 justify-center">
        {post?.status === "PUBLISH" ? (
          <Button type="submit" className="mb-2 cursor-pointer">
            Save
          </Button>
        ) : (
          <>
            <Button type="submit" className="mb-2 cursor-pointer">
              Save
            </Button>
            <Button type="submit" className="mb-2 cursor-pointer">
              Publish
            </Button>
          </>
        )}
      </div>
      <TabsContent value="meta">
        <MetaTabContent post={post} control={control} />
      </TabsContent>
      <TabsContent value="editor">
        <EditorTabContent />
      </TabsContent>
      <TabsContent value="media">
        <MediaTabContent />
      </TabsContent>
      <TabsContent value="publish">
        <PublishTabContent />
      </TabsContent>
    </Tabs>
  );
};

export default PostForm;
