import React, { useState } from "react";
import Pagination from "../UI/Pagination";

const AllUsers = ({ currentData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  const users = currentData.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="p-5 bg-white shadow-xl rounded-lg">
      <h1 className=" text-xl font-semibold">All Users</h1>

      <div className="overflow-x-auto bg-white rounded-lg mt-8">
        <table className="text-left w-full">
          <thead className="">
            <tr className="border-b border-[#DFE0EB] text-[#9FA2B4] font-inter text-sm leading-4 ">
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Email</th>
              <th className="py-2 px-3">Role</th>
              <th className="py-2 px-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 ? (
              users.map((data, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DFE0EB] hover:bg-gray-50 text-black font-display text-sm font-normal"
                >
                  <td className="py-3 px-3 text-gray-700">{data.name}</td>
                  <td className="py-3 px-3">{data.email}</td>
                  <td className="py-3 px-3 text-gray-700">{data.role}</td>
                  <td className="py-3 px-3 flex items-center gap-3 justify-center">
                    <button className="p-[0.4rem] px-4 text-[13px] font-semibold text-white bg-[#FEC400] rounded-xl cursor-pointer">
                      EDIT
                    </button>
                    <button className="p-[0.4rem] px-4 text-[13px] font-semibold text-white bg-[#F12B2C] rounded-xl cursor-pointer">
                      DELETE
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-5 text-gray-500 font-semibold"
                >
                  <p>No users available.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mt-3">
          <Pagination
            handlePageClick={handlePageClick}
            data={currentData}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
