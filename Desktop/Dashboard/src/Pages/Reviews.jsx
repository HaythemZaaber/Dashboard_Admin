import React from "react";
import SearchBar from "../Components/UI/SearchBar";
import Table from "../Components/UI/Table";
import { Rate, Tooltip } from "antd";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    email: "user09@gmail.com",
    address: "Canal Street",
    feedback: "Good",
    rating: 2,
  },
  {
    id: 2,
    name: "matthew",
    email: "user09@gmail.com",
    address: "Canal Street",
    feedback: "Top!",
    rating: 5,
  },
  {
    id: 3,
    name: "John Doe",
    email: "user09@gmail.com",
    address: "ACTIVATED",
    feedback: "Best App",
    rating: 4,
  },
  {
    id: 4,
    name: "John Doe",
    email: "user09@gmail.com",
    address: "Canal Street",
    feedback: "Good",
    rating: 3,
  },
];

const columns = [
  { header: "Name", key: "name" },
  { header: "Email", key: "email" },
  { header: "Address", key: "address" },
  { header: "Feedback", key: "feedback" },
  { header: "Rating", key: "rating" },
];

const Reviews = () => {
  return (
    <div>
      <SearchBar placeholder="Reviews" search={true} />

      <div className="mt-5">
        <Table
          data={reviews}
          columns={columns}
          itemsPerPage={10}
          noDataMessage="No reviews available."
          title="All Reviews"
        />
      </div>
    </div>
  );
};

export default Reviews;
