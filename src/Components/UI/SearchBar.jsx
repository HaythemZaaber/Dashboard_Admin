import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="flex items-center relative w-[50vw] mx-auto text-white shadow-2xl text-lg  my-5">
      <input
        type="search"
        placeholder={placeholder}
        className="outline-none w-full p-4 placeholder:text-lg  rounded-xl bg-secondary text-white transition duration-300 placeholder-gray-300 focus:text-white focus:shadow-[0_0_0_3px_rgb(0_48_73_/_40%)]"
      />
      <IoSearch className="absolute right-4 w-5 h-10 text-white" size={35} />
    </div>
  );
};

export default SearchBar;
