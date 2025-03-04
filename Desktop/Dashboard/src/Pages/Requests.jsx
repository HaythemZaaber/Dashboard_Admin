import React from "react";
import SearchBar from "../Components/UI/SearchBar";
import accept from "../assets/accept.png";
import del from "../assets/delete.png";
import Table from "../Components/UI/Table";

const requests = [
  {
    id: 1,
    requestName: "John Brad Simmons",
    service: "Home Control",
    date: new Date().toLocaleDateString(),
    city: "Canada",
  },
  {
    id: 2,
    requestName: "Brad Simmons",
    service: "Home Control",
    date: new Date().toLocaleDateString(),
    city: "Canada",
  },
  {
    id: 3,
    requestName: "John Brad Simmons",
    service: "Home Control",
    date: new Date().toLocaleDateString(),
    city: "Canada",
  },
  {
    id: 4,
    requestName: "John Brad Simmons",
    service: "Home Control",
    date: new Date().toLocaleDateString(),
    city: "Canada",
  },
];

const columns = [
  { header: "Request Name", key: "requestName" },
  { header: "Service", key: "service" },
  { header: "Date", key: "date" },
  { header: "City", key: "city" },
];

const actions = [
  {
    label: <img src={accept} alt="accept" />,
    className: "w-8 h-8",
    onClick: (row) => console.log("Edit:", row),
  },
  {
    label: <img src={del} alt="delete" />,
    className: "w-8 h-8",
    onClick: (row) => console.log("Delete:", row),
  },
];

const Requests = () => {
  return (
    <div>
      <SearchBar placeholder="Requests Management" search={true} />

      <div className="mt-5">
        <Table
          title="All Requests"
          data={requests}
          columns={columns}
          itemsPerPage={10}
          actions={actions}
          noDataMessage="No requests available."
        />
      </div>
    </div>
  );
};

export default Requests;
