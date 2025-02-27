import React, { useState } from "react";
import Pagination from "./Pagination";

const Table = ({
  data,
  columns,
  itemsPerPage = 10,
  actions = [],
  noDataMessage = "No data available.",
  title,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-5 bg-white shadow-xl rounded-lg">
      <h1 className=" text-xl font-semibold">{title}</h1>
      <div className="overflow-x-auto bg-white rounded-lg mt-8">
        <table className="text-left w-full">
          <thead>
            <tr className="border-b border-[#DFE0EB] text-[#9FA2B4] font-inter text-sm leading-4">
              {columns.map((column, index) => (
                <th key={index} className="py-2 px-3">
                  {column.header}
                </th>
              ))}
              {actions.length > 0 && (
                <th className="py-2 px-3 text-center">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-[#DFE0EB] hover:bg-gray-50 text-black font-display text-sm font-normal"
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="py-3 px-3 text-gray-700">
                      <span
                        className={`${
                          column.key === "status"
                            ? row[column.key] === "Pending"
                              ? "text-third bg-third/15  px-4 py-2 rounded-xl font-semibold"
                              : row[column.key] === "Completed"
                              ? "text-green-600 bg-green-500/15  px-4 py-2 rounded-xl font-semibold"
                              : "text-red-500 bg-red-500/15  px-4 py-2 rounded-xl font-semibold"
                            : ""
                        }`}
                      >
                        {" "}
                        {row[column.key]}
                      </span>
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className="py-3 px-3 flex items-center gap-3 justify-center">
                      {actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          className={` text-[13px] font-semibold  rounded-xl cursor-pointer ${action.className}`}
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
            data={data}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
