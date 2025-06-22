import React, { use, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SelectOption from "./SelectOption";
import { CircleX } from "lucide-react";
import { Controller } from "react-hook-form";
const MetaTabContent = ({ post, control }) => {
  const [tags, setTags] = useState(post?.tags || []);
  const states = [
    {
      name: "Andhra Pradesh",
      code: "AP",
    },
    {
      name: "Arunachal Pradesh",
      code: "AR",
    },
    {
      name: "Assam",
      code: "AS",
    },
    {
      name: "Bihar",
      code: "BR",
    },
    {
      name: "Chhattisgarh",
      code: "CG",
    },
    {
      name: "Goa",
      code: "GA",
    },
    {
      name: "Gujarat",
      code: "GJ",
    },
    {
      name: "Haryana",
      code: "HR",
    },
    {
      name: "Himachal Pradesh",
      code: "HP",
    },
    {
      name: "Jharkhand",
      code: "JH",
    },
    {
      name: "Karnataka",
      code: "KA",
    },
    {
      name: "Kerala",
      code: "KL",
    },
    {
      name: "Madhya Pradesh",
      code: "MP",
    },
    {
      name: "Maharashtra",
      code: "MH",
    },
    {
      name: "Manipur",
      code: "MN",
    },
    {
      name: "Meghalaya",
      code: "ML",
    },
    {
      name: "Mizoram",
      code: "MZ",
    },
    {
      name: "Nagaland",
      code: "NL",
    },
    {
      name: "Odisha",
      code: "OR",
    },
    {
      name: "Punjab",
      code: "PB",
    },
    {
      name: "Rajasthan",
      code: "RJ",
    },
    {
      name: "Sikkim",
      code: "SK",
    },
    {
      name: "Tamil Nadu",
      code: "TN",
    },
    {
      name: "Telangana",
      code: "TS",
    },
    {
      name: "Tripura",
      code: "TR",
    },
    {
      name: "Uttar Pradesh",
      code: "UP",
    },
    {
      name: "Uttarakhand",
      code: "UK",
    },
    {
      name: "West Bengal",
      code: "WB",
    },
    {
      name: "Andaman and Nicobar Islands",
      code: "AN",
    },
  ];
  //main cities in india
  const cities = [
    {
      name: "Mumbai",
      code: "MU",
    },
    {
      name: "Delhi",
      code: "DL",
    },
    {
      name: "Bangalore",
      code: "BN",
    },
    {
      name: "Hyderabad",
      code: "HY",
    },
    {
      name: "Ahmedabad",
      code: "AH",
    },
    {
      name: "Chennai",
      code: "CH",
    },
    {
      name: "Kolkata",
      code: "KO",
    },
    {
      name: "Surat",
      code: "SU",
    },
    {
      name: "Pune",
      code: "PU",
    },
    {
      name: "Jaipur",
      code: "JP",
    },
    {
      name: "Lucknow",
      code: "LU",
    },
  ];
  const handleKeyPress = (e) => {
    if (e.key === "ArrowDown") {
      setTags([...tags, e.target.value.trim().toLowerCase()]);
      e.target.value = "";
    }
  };
  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };
  return (
    <div className="w-[600px] bg-white p-5 m-auto">
      <form>
        <div className="mb-4">
          <Label>Title</Label>
          <Controller
            name="title"
            control={control}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="title"
                className="w-full mt-4"
                onChange={onChange}
              />
            )}
          />
        </div>
        <div className="flex gap-4 mb-4  md:flex-row">
          <div className="w-1/2">
            <Label>Tags</Label>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="tags"
                  onKeyDown={(e) => handleKeyPress(e)}
                  className="mt-4"
                />
              )}
            />
            <div className="flex gap-2 flex-wrap mt-2">
              {tags.map((tag) => {
                return (
                  <div className="bg-green-200 flex gap-2 px-4 py-1 rounded-md text-md font-semibold">
                    <span> {tag}</span>{" "}
                    <CircleX
                      onClick={() => handleRemoveTag(tag)}
                      className="cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-1/2">
            <Label>Category</Label>
            <Controller
              name="category"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="category"
                  className="mt-4"
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <Label>State</Label>
            <Controller
              name="state"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectOption
                  className="mt-4"
                  placeholder="Select State"
                  options={states}
                  onSelectItem={onChange}
                />
              )}
            />
          </div>
          <div className="w-1/2">
            <Label>City</Label>
            <Controller
              name="city"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectOption
                  className="mt-4 w-full"
                  placeholder="Select City"
                  options={cities}
                  onSelectItem={onChange}
                />
              )}
            />
          </div>
        </div>
        <div>
          <div>
            <Label>Country</Label>
            <Controller
              name="country"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectOption
                  className="mt-4 w-full"
                  placeholder="Select Country"
                  options={[{ name: "India", code: "IN" }]}
                  onSelectItem={onChange}
                />
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MetaTabContent;
