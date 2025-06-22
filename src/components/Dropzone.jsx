import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, ImageMinus } from "lucide-react";
import { Controller } from "react-hook-form";
const Dropzone = ({ register,setValue }) => {
  const [file, setFile] = useState(null);
  const removeThumbnail = () => {
    setFile(null);
  };
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  });
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDrop,
  });
  return (
    <Controller
      name="thumbnail"
      control={control}
      render={({ field: { onChange, value } }) => (
        <div
          className={`overflow-hidden  h-[300px] border-2 border-dashed border-gray-300 shadow-xl flex justify-center items-center flex-col gap-4 rounded-md ${isDragActive && "bg-gray-200"} relative`}
        >
          {!file ? (
            <>
              <div
                className="px-5 py-3 bg-purple-600 cursor-pointer rounded-full"
                {...getRootProps()}
              >
                <input className=" cursor-pointer" {...getInputProps()} />
                <p className="text-xl text-white flex gap-3">
                  <Upload />
                  <span>Browse thumbnail</span>
                </p>
              </div>
              <p className="text-">
                <upload />
                or drag and drop it here
              </p>
            </>
          ) : (
            <>
              <img
                className="h-full w-full object-cover"
                src={URL.createObjectURL(file)}
              />
              <div className="absolute p-2 top-3 right-3 bg-gray-300 rounded-full cursor-pointer">
                <ImageMinus onClick={removeThumbnail} />
              </div>
            </>
          )}
        </div>
      )}
    />
  );
};

export default Dropzone;
