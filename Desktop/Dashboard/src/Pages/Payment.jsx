import React from "react";
import SearchBar from "../Components/UI/SearchBar";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

import Table from "../Components/UI/Table";

const users = [
  {
    "#": 1,
    name: "John Doe",
    amount: "$100",
    date: new Date().toLocaleDateString(),
    status: "Pending",
    payrollDate: new Date().getFullYear(),
  },
  {
    "#": 2,
    name: "matthew",
    amount: "$100",
    date: new Date().toLocaleDateString(),
    status: "Completed",
    payrollDate: new Date().getFullYear(),
  },
  {
    "#": 3,
    name: "John Doe",
    amount: "$100",
    date: new Date().toLocaleDateString(),
    status: "Pending",
    payrollDate: new Date().getFullYear(),
  },

  {
    "#": 4,
    name: "John Doe",
    amount: "$100",
    date: new Date().toLocaleDateString(),
    status: "Error",
    payrollDate: new Date().getFullYear(),
  },
];

const columns = [
  { header: "#", key: "#" },
  { header: "Name", key: "name" },
  { header: "Amount", key: "amount" },
  { header: "Date", key: "date" },
  { header: "Status", key: "status" },
  { header: "Payroll date", key: "payrollDate" },
];

const actions = [
  {
    label: <PiDotsThreeOutlineVertical size={20} />,
    className: "border border-[#D9D9D9] rounded-lg p-1 text-black",
    onClick: (row) => console.log("Edit:", row),
  },
];

const Payment = () => {
  return (
    <div>
      <SearchBar placeholder="Payment Management" search={true} />

      <div className="mt-5">
        {/* <AllUsers currentData={users} /> */}
        <Table
          data={users}
          columns={columns}
          itemsPerPage={10}
          actions={actions}
          noDataMessage="No payment available."
        />
      </div>
    </div>
  );
};

export default Payment;
