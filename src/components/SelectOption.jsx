import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

function SelectOption({
  options,
  onSelectItem,
  className,
  placeholder,
  value,
  ...props
}) {
  return (
    <Select
      onValueChange={(option) => onSelectItem(option)}
      classsName="w-full"
      value={value}
    >
      <SelectTrigger className="cursor-pointer mt-4 w-full">
        <SelectValue placeholder={placeholder} className="w-full" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem value={option.code}>{option.name}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
export default SelectOption;
