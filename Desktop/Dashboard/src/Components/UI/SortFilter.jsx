import React, { useState } from "react";
import { FaSort, FaFilter } from "react-icons/fa";

const SortFilter = ({ onSort, onFilter }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterValue, setFilterValue] = useState("");

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    onSort(newSortOrder);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);
    onFilter(value);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <FaSort onClick={handleSort} className="cursor-pointer" />
        <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaFilter className="cursor-pointer" />
        <input
          type="text"
          placeholder="Filter..."
          value={filterValue}
          onChange={handleFilter}
          className="border p-1 rounded"
        />
      </div>
    </div>
  );
};

export default SortFilter;
