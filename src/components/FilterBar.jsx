import React from "react";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { FaFilter } from "react-icons/fa";
const FilterBar = ({ className }) => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="flex space-x-4 flex-wrap-no  justify-center items-center">
        <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex  items-center gap-x-2 cursor-pointer">
          <FaFilter />
          <span>Filter</span>
        </div>
      </div>
      <ScrollArea className="w-full py-4 overflow-hidden ">
        <div className="flex gap-4 flex-wrap-no whitespace-nowrap justify-center items-center">
          <div className="rounded-full bg-slate-200 px-5  text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            All
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag2
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag3
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag4
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag3
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag4
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag3
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag4
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag1
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag2
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag3
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag4
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag3
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag4
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag3
          </div>
          <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex items-center cursor-pointer">
            #Tag4
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default FilterBar;
