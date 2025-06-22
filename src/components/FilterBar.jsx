import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { FaFilter } from "react-icons/fa";
import FilterDropDown from "./FilterDropDown";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const FilterBar = ({ className }) => {
  const [selectedFilter, setSelectedFilter] = useState("Category");
  const [selectedCategories, setSelectedCategories] = useState([
    "Coding",
    "Design",
    "Marketing",
  ]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCities, setSelectedCities] = useState(["City 1", "City 2"]);
  const [selectedCountries, setSelectedCountries] = useState(["india", "us"]);
  const [filterOptions, setFilterOptions] = useState([
    "Category",
    "State",
    "City",
    "Country",
  ]);
  const [categoryOptions, setCategoryOptions] = useState([
    "Coding",
    "Design",
    "Marketing",
    "Sales",
  ]);
  const [stateOptions, setStateOptions] = useState(["up", "mp", "js"]);
  const [cityOptions, setCityOptions] = useState(["City 1", "City 2"]);
  const [countryOptions, setCountryOptions] = useState([
    "india",
    "us",
    "Australia",
    "uk",
  ]);
  const handleOptionChange = (
    cheched,
    option,
    selectedOptions,
    setSelectedOptions,
  ) => {
    if (cheched) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => selectedOption !== option),
      );
    }
  };
  const AllFilterOptionsMap = {
    Category: {
      options: categoryOptions,
      setSelectedOptions: setSelectedCategories,
    },
    Country: {
      options: countryOptions,
      setSelectedOptions: setSelectedCountries,
    },
    State: {
      options: stateOptions,
      setSelectedOptions: setSelectedStates,
    },
    City: {
      options: cityOptions,
      setSelectedOptions: setSelectedCities,
    },
  };
  const handleAllSelect = (checked, { options, setSelectedOptions }) => {
    if (checked) {
      setSelectedOptions(options);
    } else {
      setSelectedOptions([]);
    }
  };
  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="flex space-x-4 flex-wrap-no  justify-center items-center">
        <Popover>
          <PopoverTrigger>
            <div className="rounded-full bg-slate-200 px-5 py-1 text-md font-semibold text-slate-700 border border-indigo-600 h-[35px] flex  items-center gap-x-2 cursor-pointer">
              <FaFilter />

              <span>Filter</span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto overflow-hidden">
            <FilterDropDown
              onAllSelect={(checked, filter) =>
                handleAllSelect(checked, AllFilterOptionsMap[filter])
              }
              onAllClear={(filter) =>
                handleAllSelect(false, AllFilterOptionsMap[filter])
              }
              filterOptions={filterOptions}
              selectedFilter={selectedFilter}
              categoryOptions={categoryOptions}
              stateOptions={stateOptions}
              cityOptions={cityOptions}
              countryOptions={countryOptions}
              selectedCategories={selectedCategories}
              selectedStates={selectedStates}
              selectedCities={selectedCities}
              selectedCountries={selectedCountries}
              onCategoryChange={(checked, option) =>
                handleOptionChange(
                  checked,
                  option,
                  selectedCategories,
                  setSelectedCategories,
                )
              }
              onStateChange={(checked, option) =>
                handleOptionChange(
                  checked,
                  option,
                  selectedStates,
                  setSelectedStates,
                )
              }
              onCityChange={(checked, option) =>
                handleOptionChange(
                  checked,
                  option,
                  selectedCities,
                  setSelectedCities,
                )
              }
              onCountryChange={(checked, option) =>
                handleOptionChange(
                  checked,
                  option,
                  selectedCountries,
                  setSelectedCountries,
                )
              }
              onFilterChange={(filter) => setSelectedFilter(filter)}
            />
          </PopoverContent>
        </Popover>
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
