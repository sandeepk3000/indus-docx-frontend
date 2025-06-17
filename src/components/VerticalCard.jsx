import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const VerticalCard = ({
  className = "",
  title,
  description,
  cardUrl,
  ...props
}) => {
  return (
    <a href="" className="">
      <Card
        className={`h-[340px] w-full relative rounded-2xl p-2 md:w-[270px] bg-white ${className} overflow-hidden`}
      >
        <img
          src={`https://images.pexels.com/photos/2707010/pexels-photo-2707010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
          alt="Card Image"
          className="w-full h-[200px] rounded-2xl object-cover"
        />
        <CardContent className="p-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </a>
  );
};

export default VerticalCard;
