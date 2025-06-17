import React, { useEffect, useState } from "react";
import FeaturedNewsBanner from "../FeaturedNewsBanner";
import FeaturedPostSection from "../FeaturedPostSection";
import LatestPostSection from "../LatestSection";
import useFeaturedPost from "../../hooks/useFeaturedPost";
import { useDispatch } from "react-redux";
import { setFeaturedPosts } from "../../redux/featuredPostSlice";
import FilterDropDown from "../FilterDropDown";
const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("Category");
  const [selectedCategories, setSelectedCategories] = useState([
    "Coding",
    "Design",
    "Marketing",
  ]);
  const [currentFilterOptionsSelected,setCurrentFilterOptionsSelected] = useState(0)
  const [selectedStates, setSelectedStates] = useState(["State 1", "State 2"]);
  const [selectedCities, setSelectedCities] = useState(["City 1", "City 2"]);
  const [selectedCountries, setSelectedCountries] = useState([
    "Country 1",
    "Country 2",
  ]);
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
  const [stateOptions, setStateOptions] = useState([
    "State 1",
    "State 2",
    "State 3",
  ]);
  const [cityOptions, setCityOptions] = useState(["City 1", "City 2"]);
  const [countryOptions, setCountryOptions] = useState([
    "Country 1",
    "Country 2",
  ]);
  const handleCategoryChange = (checked, option) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, option]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== option),
      );
    }
  };
  const handleStateChange = (checked, option) => {
    if (checked) {
      setSelectedStates([...selectedStates, option]);
    } else {
      setSelectedStates(selectedStates.filter((item) => item !== option));
    }
  };
  const handleCityChange = (checked, option) => {
    if (checked) {
      setSelectedCities([...selectedCities, option]);
    } else {
      setSelectedCities(selectedCities.filter((item) => item !== option));
    }
  };
  const handleCountryChange = (checked, option) => {
    if (checked) {
      setSelectedCountries([...selectedCountries, option]);
    } else {
      setSelectedCountries(selectedCountries.filter((item) => item !== option));
    }
  };
  const handleAllSelect = (checked, filter) => {
    if (checked) {
      if (filter === "Category") {
        setSelectedCategories(categoryOptions);
      }
      if (filter === "State") {
        setSelectedStates(stateOptions);
      }
      if (filter === "City") {
        setSelectedCities(cityOptions);
      }
      if (filter === "Country") {
        setSelectedCountries(countryOptions);
      }
    } else {
      if (filter === "Category") {
        setSelectedCategories([]);
      }
      if (filter === "State") {
        setSelectedStates([]);
      }
      if (filter === "City") {
        setSelectedCities([]);
      }
      if (filter === "Country") {
        setSelectedCountries([]);
      }
    }
  };
  return (
    // <div className="w-screen h-full mx-auto bg-blue-600 top-0 left-">
    //   <div className="w-full md:flex max-w-[1280px] m-auto rounded-sm h-full p-4 md:gap-4 ">
    //     <div className="w-full">
    //       <FeaturedNewsBanner />
    //       <FeaturedPostSection />
    //     </div>
    //     <div className="w-full md:w-1/3">
    //       <LatestPostSection />
    //     </div>
    //   </div>
    // </div>
    <FilterDropDown
      onAllSelect={(checked, option) => handleAllSelect(checked, option)}
      onAllClear={(filter) => handleAllSelect(false, filter)}
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
        handleCategoryChange(checked, option)
      }
      onStateChange={(checked, option) => handleStateChange(checked, option)}
      onCityChange={(checked, option) => handleCityChange(checked, option)}
      onCountryChange={(checked, option) =>
        handleCountryChange(checked, option)
      }
      onFilterChange={filter => setSelectedFilter(filter)}
    />
  );
};

export default Home;
