import React from "react";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { IoMdRemove } from "react-icons/io";
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
  const loopOnOptions = (options, selectedOptions, onOptionChange) => {
    return options.map((option, index) => (
      <>
        {index === 0 && (
          <div className={`flex items-center space-x-2`}>
            <Checkbox
              id="all"
              className="cursor-pointer"
              checked={selectedOptions.length === options.length}
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
            checked={selectedOptions.includes(option)}
            onCheckedChange={(checked) => onOptionChange(checked, option)}
            id={option}
          />
          <Label htmlFor={option}>{option}</Label>
        </div>
      </>
    ));
  };
  const loopOnSelectedOptions = (selectedOptions, onOptionChange) => {
    return selectedOptions.map((option, index) => (
      <div className="flex items-center space-x-2 mt-3 justify-between">
        <span className="text-sm">{option}</span>
        <IoMdRemove
          className="cursor-pointer"
          onClick={() => onOptionChange(false, option)}
        />
      </div>
    ));
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
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none border-none rounded-none h-[35px] px-4 w-full"
                />
                <Separator />
                <div className="px-2 pt-4">
                  {selectedFilter === "Category" &&
                    loopOnOptions(
                      categoryOptions,
                      selectedCategories,
                      onCategoryChange,
                    )}
                  {selectedFilter === "City" &&
                    loopOnOptions(cityOptions, selectedCities, onCityChange)}
                  {selectedFilter === "State" &&
                    loopOnOptions(stateOptions, selectedStates, onStateChange)}
                  {selectedFilter === "Country" &&
                    loopOnOptions(
                      countryOptions,
                      selectedCountries,
                      onCountryChange,
                    )}
                </div>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col flex-1 bg-white">
                <div className="flex items-center h-[35px] bg-white px-2  justify-between">
                  <span className="text-sm">{selectedFilter}</span>
                  <button
                    className="text-sm text-blue-400 border-0 outline-none cursor-pointer"
                    onClick={() => onAllClear(selectedFilter)}
                  >
                    Clear All
                  </button>
                </div>

                <Separator />
                <div className="px-2 pt-4 ">
                  {selectedFilter === "Category" &&
                    loopOnSelectedOptions(selectedCategories, onCategoryChange)}
                  {selectedFilter === "City" &&
                    loopOnSelectedOptions(selectedCities, onCityChange)}
                  {selectedFilter === "State" &&
                    loopOnSelectedOptions(selectedStates, onStateChange)}
                  {selectedFilter === "Country" &&
                    loopOnSelectedOptions(selectedCountries, onCountryChange)}
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
