import React from "react";

const StatsItem = ({ title, value, icon, updated, style }) => {
  return (
    <div
      className={`p-5 rounded-xl  flex-1 shadow-[0_5px_5px_1px_rgb(0_48_73_/_50%)] ${style} `}
    >
      <div className="flex items-center justify-between mb-2 gap-3">
        <h1 className="font-semibold text-[18px]">{title}</h1>
        <div className="p-2 rounded-full bg-white">{icon}</div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">{value}</h1>
        <p>{updated}</p>
      </div>
    </div>
  );
};

export default StatsItem;
