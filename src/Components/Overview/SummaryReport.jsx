import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SummaryReport = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = [
    { name: "Jan", dataPoint: 4000 },
    { name: "Feb", dataPoint: 3000 },
    { name: "Mar", dataPoint: 2000 },
    { name: "Apr", dataPoint: 2780 },
    { name: "May", dataPoint: 1890 },
    { name: "Jun", dataPoint: 2390 },
    { name: "Jul", dataPoint: 3490 },
    { name: "Aug", dataPoint: 4000 },
    { name: "Sep", dataPoint: 3000 },
    { name: "Oct", dataPoint: 2000 },
    { name: "Nov", dataPoint: 2780 },
    { name: "Dec", dataPoint: 1890 },
  ];

  return (
    <div className="bg-white rounded-xl p-5  shadow-sm ">
      <h1 className="font-bold text-base mb-5">Summary Report</h1>
      <div className="mt-5">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: -30, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="dataPoint"
              stroke="#8a2be2"
              strokeWidth={2}
              dot={{ r: 5, fill: "#8a2be2" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SummaryReport;
