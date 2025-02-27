import React from "react";
import SearchBar from "../Components/UI/SearchBar";
import { IoMdAdd } from "react-icons/io";
import AllUsers from "../Components/ProfilesManagement.jsx/AllUsers";
import Table from "../Components/UI/Table";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "user09@gmail.com",
    role: "Client",
  },
  {
    id: 2,
    name: "matthew",
    email: "user09@gmail.com",
    role: "Client",
  },
  {
    id: 3,
    name: "John Doe",
    email: "user09@gmail.com",
    role: "Agent",
  },
  {
    id: 4,
    name: "John Doe",
    email: "user09@gmail.com",
    role: "Client",
  },
];

const columns = [
  { header: "Name", key: "name" },
  { header: "Email", key: "email" },
  { header: "Role", key: "role" },
];

const actions = [
  {
    label: "EDIT",
    className: "bg-[#FEC400] text-white p-[0.4rem] px-4",
    onClick: (row) => console.log("Edit:", row),
  },
  {
    label: "DELETE",
    className: "bg-[#F12B2C] text-white p-[0.4rem] px-4",
    onClick: (row) => console.log("Delete:", row),
  },
];

const ProfilesManagement = () => {
  return (
    <div>
      <SearchBar placeholder="Profiles Management" />
      <div className="bg-primary text-white p-3 rounded-lg flex items-center justify-end gap-2 ml-auto mt-3 w-fit px-5 cursor-pointer">
        <IoMdAdd size={23} />
        <button className="font-semibold text-base cursor-pointer">
          Add User
        </button>
      </div>
      <div className="mt-5">
        {/* <AllUsers currentData={users} /> */}
        <Table
          title="All Users"
          data={users}
          columns={columns}
          itemsPerPage={10}
          actions={actions}
          noDataMessage="No users available."
        />
      </div>
    </div>
  );
};

export default ProfilesManagement;
