import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RoundedBgBtn from "./RoundedBgBtn";
const BannerCard = () => {
  return (
    <Card className="h-[400px] relative rounded-xl p-0 w-full overflow-hidden">
      <img
        src="https://images.pexels.com/photos/2707010/pexels-photo-2707010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Card Image"
        className="w-full h-full  object-cover"
      />
      <CardHeader className="absolute top-[80px]">
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent className="absolute bottom-[80px]">
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardContent>
      <div className="h-full w-full bg-gradient-to-r from-slate-700  absolute"></div>
    </Card>
  );
};

export default BannerCard;
