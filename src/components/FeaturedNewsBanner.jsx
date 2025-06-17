import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BannerCard from "./BannerCard";

const FeaturedNewsBanner = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full shadow-md"
      >
        <CarouselContent>
          <CarouselItem>
            <BannerCard  
              cardUrl={
                "https://images.unsplash.com/photo-1682685797769-481b48222adf?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8f"
              }
            />
          </CarouselItem>
          <CarouselItem>
            <BannerCard />
          </CarouselItem>
          <CarouselItem>
            <BannerCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedNewsBanner;
