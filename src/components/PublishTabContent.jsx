import React, { useState } from "react";
import SelectOption from "./SelectOption";
import DateTimePicker from "./DateTimePicker";
const PublishTabContent = ({ post }) => {
  const [status, setStatus] = useState(post?.status || "DRAFT");
  const statuses = [
    {
      name: "Draft",
      code: "DRAFT",
    },
    {
      name: "Publish",
      code: "PUBLISH",
    },
    {
      name: "Scheduled",
      code: "SCHEDULED",
    },
    {
      name: "Private",
      code: "PRIVATE",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <SelectOption
        value={status}
        options={statuses}
        placeholder={"Select Status"}
        onSelectItem={(status) => setStatus(status)}
      />
      <DateTimePicker />
    </div>
  );
};

export default PublishTabContent;
