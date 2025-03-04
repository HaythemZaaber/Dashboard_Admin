import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown, FaFilter } from "react-icons/fa";
import Pagination from "./Pagination";
import { Rate, Tooltip } from "antd";

const Table = ({
  data,
  columns,
  itemsPerPage = 10,
  actions = [],
  noDataMessage = "No data available.",
  title,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [filterBy, setFilterBy] = useState([]);
  const [filters, setFilters] = useState(
    columns.reduce((acc, col) => ({ ...acc, [col.key]: "" }), {})
  );

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Sorting Logic
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Filtering Logic
  const filteredData = sortedData.filter((row) =>
    columns.every((column) =>
      row[column.key]
        ?.toString()
        .toLowerCase()
        .includes(filters[column.key].toLowerCase())
    )
  );

  // Pagination
  const startIndex = currentPage * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-5 bg-white border border-[#D9D9D9] shadow-sm rounded-lg">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="overflow-x-auto bg-white rounded-b-lg mt-8">
        <table className="text-left w-full">
          <thead>
            <tr className="border-b border-[#DFE0EB] text-[#9FA2B4] font-inter text-sm leading-4 bg-[#F3F6F9]">
              {columns.map((column, index) => (
                <th key={index} className="py-2 px-3">
                  <div className="flex items-center justify-between gap-3">
                    <span>{column.header}</span>
                    <div className="flex items-center gap-1">
                      <FaFilter
                        onClick={() => {
                          if (filterBy.indexOf(column.key) === -1) {
                            setFilterBy([...filterBy, column.key]);
                          } else
                            setFilterBy((prev) => {
                              return prev.filter((key) => key !== column.key);
                            });
                        }}
                        size={12}
                        className="cursor-pointer"
                      />

                      <button
                        onClick={() => handleSort(column.key)}
                        className="ml-2"
                      >
                        {sortConfig.key === column.key ? (
                          sortConfig.direction === "asc" ? (
                            <FaSortUp className="inline" />
                          ) : (
                            <FaSortDown className="inline" />
                          )
                        ) : (
                          <FaSort className="inline" />
                        )}
                      </button>
                    </div>
                  </div>
                </th>
              ))}
              {actions.length > 0 && (
                <th className="py-2 px-3 text-center">Actions</th>
              )}
            </tr>

            {filterBy.length > 0 && (
              <tr className="bg-[#F3F6F9]">
                {columns.map((column, index) => (
                  <th key={index} className="py-2 px-3">
                    <input
                      type="text"
                      placeholder={`Filter by ${column.header}`}
                      value={filters[column.key]}
                      onChange={(e) =>
                        setFilters({ ...filters, [column.key]: e.target.value })
                      }
                      className={`w-full p-1 text-sm border rounded outline-none border-[#DFE0EB] placeholder:text-gray-400 font-medium ${
                        filterBy.includes(column.key)
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </th>
                ))}
                {actions.length > 0 && <th></th>}
              </tr>
            )}
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-[#DFE0EB] hover:bg-gray-50 text-black text-xs lg:text-sm"
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="py-3 px-3 text-gray-700">
                      <span
                        className={`${
                          column.key === "status"
                            ? "px-4 py-1 rounded-xl font-semibold"
                            : ""
                        } ${
                          column.key === "status"
                            ? row[column.key] === "Pending"
                              ? "text-third bg-third/15"
                              : row[column.key] === "Completed"
                              ? "text-green-600 bg-green-500/15"
                              : row[column.key] === "Error"
                              ? "text-red-500 bg-red-500/15"
                              : row[column.key] === "DESACTIVATED"
                              ? "text-red-500 bg-red-500/15"
                              : "text-green-600 bg-green-500/15"
                            : ""
                        }`}
                      >
                        {column.key === "rating" ? (
                          <Tooltip title={`${row[column.key]} Stars`}>
                            {" "}
                            <Rate
                              disabled
                              defaultValue={row[column.key]}
                              style={{ fontSize: "18px" }}
                            />
                          </Tooltip>
                        ) : (
                          row[column.key]
                        )}
                      </span>
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className="py-3 px-3 flex items-center gap-3 justify-center">
                      {actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          className={`text-[13px] font-semibold rounded-xl cursor-pointer ${action.className}`}
                          onClick={() => action.onClick(row)}
                        >
                          {action.label}
                        </button>
                      ))}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (actions.length > 0 ? 1 : 0)}
                  className="text-center p-5 text-gray-500 font-semibold"
                >
                  {noDataMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mt-3">
          <Pagination
            handlePageClick={handlePageClick}
            data={filteredData}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
