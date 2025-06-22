import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { IoMdRemove } from "react-icons/io";
import SearchFilterOptions from "./SearchFilterOptions";
const FilterDropDown = ({
  onAllSelect,
  onAllClear,
  onCategoryChange,
  onStateChange,
  onCityChange,
  onCountryChange,
  onFilterChange,
  filterOptions,
  selectedFilter,
  categoryOptions,
  stateOptions,
  cityOptions,
  countryOptions,
  selectedCategories,
  selectedStates,
  selectedCities,
  selectedCountries,
}) => {
  const [query, setQuery] = useState("");
  const loopOnOptions = ({ options, selected, onChange }) => {
    return filterArray(query, options).map((option, index) => (
      <>
        {index === 0 && (
          <div className={`flex items-center space-x-2`}>
            <Checkbox
              id="all"
              className="cursor-pointer"
              checked={selected.length === options.length}
              onCheckedChange={(checked) =>
                onAllSelect(checked, selectedFilter)
              }
            />
            <Label htmlFor="terms">Select All</Label>
          </div>
        )}
        <div className={`flex items-center space-x-2 ml-3 mt-3`}>
          <Checkbox
            className="cursor-pointer"
            checked={selected.includes(option)}
            onCheckedChange={(checked) => onChange(checked, option)}
            id={option}
          />
          <Label htmlFor={option}>{option}</Label>
        </div>
      </>
    ));
  };
  const loopOnSelectedOptions = ({ selected, onChange }) => {
    return selected.map((option, index) => (
      <div className="flex items-center space-x-2 mt-3 justify-between">
        <span className="text-sm">{option}</span>
        <IoMdRemove
          className="cursor-pointer"
          onClick={() => onChange(false, option)}
        />
      </div>
    ));
  };
  const filterArray = (q, filterArray) => {
    return filterArray.filter((item) =>
      item.toLowerCase().trim().includes(q.toLowerCase().trim()),
    );
  };
  useEffect(() => {
    setQuery("");
  }, [selectedFilter]);
  const filterMap = {
    Category: {
      options: categoryOptions,
      selected: selectedCategories,
      onChange: onCategoryChange,
    },
    Country: {
      options: countryOptions,
      selected: selectedCountries,
      onChange: onCountryChange,
    },
    State: {
      options: stateOptions,
      selected: selectedStates,
      onChange: onStateChange,
    },
    City: {
      options: cityOptions,
      selected: selectedCities,
      onChange: onCityChange,
    },
  };
  return (
    <div className="w-[500px] flex">
      <div className="w-full">
        <Tabs
          defaultValue={selectedFilter}
          className="flex flex-row bg-blue-600 p-4"
        >
          <TabsList className="flex-col w-1/4 h-auto gap-2 bg-white rounded justify-start p-3">
            <h1 className="text-sm font-bold">Filter</h1>
            <Separator />
            {filterOptions.map((filter) => (
              <TabsTrigger
                value={filter}
                onClick={() => onFilterChange(filter)}
                className="rounded-[3px] cursor-pointer text-blue-400 data-[state=active]:bg-blue-100 flex-0 px-6"
              >
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Right Column (Tab Content) */}
          <div className="bg-white rounded w-3/4">
            <TabsContent value={selectedFilter} className="flex">
              <div className="flex flex-col flex-1">
                <SearchFilterOptions
                  onInputChange={(input) => setQuery(input)}
                />
                <Separator />
                <div className="px-2 pt-4">
                  {loopOnOptions(filterMap[selectedFilter])}
                </div>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col flex-1 bg-white">
                <div className="flex items-center h-[35px] bg-white px-2  justify-between">
                  <span className="text-sm">{`${filterMap[selectedFilter].selected.length} ${selectedFilter}`}</span>
                  <button
                    className="text-sm text-blue-400 border-0 outline-none cursor-pointer"
                    onClick={() => onAllClear(selectedFilter)}
                  >
                    Clear All
                  </button>
                </div>

                <Separator />
                <div className="px-2 pt-4 ">
                  {loopOnSelectedOptions(filterMap[selectedFilter])}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default FilterDropDown;
