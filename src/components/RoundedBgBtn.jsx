import React from "react";
import { Button } from "@/components/ui/button";
const RoundedBgBtn = ({ children, className, ...props }) => {
  return (
    <div>
      <Button className={`rounded-full ${className}`}>{children}</Button>
    </div>
  );
};

export default RoundedBgBtn;
