import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ placeholder, search }) => {
  return (
    <div className="flex items-center relative w-[90%] md:w-[50vw] mx-auto text-white  text-lg  my-5 mb-10 ">
      <input
        type="search"
        placeholder={placeholder}
        disabled={!search}
        className="outline-none  shadow-[0_5px_5px_1px_rgb(0_48_73_/_50%)] w-full p-4 placeholder:text-lg placeholder:font-semibold  rounded-xl bg-secondary text-white transition duration-300 placeholder-gray-300 focus:text-white focus:shadow-[0_0_0_3px_rgb(0_48_73_/_40%)]"
      />
      {search && (
        <IoSearch className="absolute right-4  w-5 h-10 text-white" size={35} />
      )}
    </div>
  );
};

export default SearchBar;
