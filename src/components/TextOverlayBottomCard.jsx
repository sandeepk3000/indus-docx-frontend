import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const TextOverlayBottomCard = ({ className = "", ...props }) => {
  return (
    <Card className={`h-[400px] relative rounded-md p-0 w-full ${className}`}>
      <img
        src="https://images.pexels.com/photos/2707010/pexels-photo-2707010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Card Image"
        className="w-full h-full"
      />
      <CardHeader className="absolute top-[80px]">
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent className="absolute bottom-[80px]">
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardContent>
    </Card>
  );
};

export default TextOverlayBottomCard;
