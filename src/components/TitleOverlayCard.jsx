import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
const TitleOverlayCard = ({ className="", title="title", imgUrl="", cardUrl="" }) => {
  return (
    <a href={cardUrl}>
      <Card
        className={`h-[230px] relative rounded-2xl w-[300px] bg-white ${className} overflow-hidden hover:scale-105 transition-all duration-300`}
      >
        <img
          src={imgUrl}
          alt="Card Image"
          className="w-full h-full rounded-2xl absolute top-0 left-0"
        />
        <CardContent className="absolute bottom-0  text-white w-full h-[70px] grid place-items-center bg-gray-500 opacity-75">
          <CardTitle className="text-xl font-bold overflow-hidden">
            {title}
          </CardTitle>
        </CardContent>
      </Card>
    </a>
  );
};

export default TitleOverlayCard;
