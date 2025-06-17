import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TitleOverlayCard from "./TitleOverlayCard";
const TrendingSection = ({ orientation }) => {
  return (
    <ScrollArea>
      <div className="rounded-md border p-4 gap-5 flex flex-wrap-no justify-center bg-blue-600 md:flex-col md:justify-start whitespace-nowrap">
        <TitleOverlayCard imgUrl="https://images.pexels.com/photos/2707010/pexels-photo-2707010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <TitleOverlayCard />
        <TitleOverlayCard />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default TrendingSection;
