import SearchBar from "../Components/UI/SearchBar";
import { IoMdAdd } from "react-icons/io";
import Table from "../Components/UI/Table";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const services = [
  {
    id: 1,
    name: "Home Control",
    price: "50$",
    status: "DESACTIVATED",
  },
  {
    id: 2,
    name: "Office Protection",
    price: "20$",
    status: "DESACTIVATED",
  },
  {
    id: 3,
    name: "Parental Control",
    price: "40$",
    status: "ACTIVATED",
  },
  {
    id: 4,
    name: "Office Protection",
    price: "50$",
    status: "DESACTIVATED",
  },
];

const columns = [
  { header: "Name", key: "name" },
  { header: "Price", key: "price" },
  { header: "Status", key: "status" },
];

const actions = [
  {
    label: <FiEdit size={20} className="text-[#008ed0]" />,
    className: "",
    onClick: (row) => console.log("Edit:", row),
  },
  {
    label: <RiDeleteBin5Fill size={20} className="text-[#008ed0]" />,
    className: "",
    onClick: (row) => console.log("Delete:", row),
  },
  {
    label: <BsThreeDotsVertical size={20} className="text-gray-400" />,
    className: "text-gray-100",
    onClick: (row) => console.log("more:", row),
  },
];

const ServicesManagement = () => {
  return (
    <div>
      <SearchBar placeholder="Services Management" search={true} />
      <div className="bg-primary text-white p-3 rounded-lg flex items-center justify-end gap-2 ml-auto mt-3 w-fit px-5 cursor-pointer">
        <IoMdAdd size={23} />
        <button className="font-semibold text-base cursor-pointer">
          Add Service
        </button>
      </div>
      <div className="mt-5">
        <Table
          title="All Services"
          data={services}
          columns={columns}
          itemsPerPage={10}
          actions={actions}
          noDataMessage="No services available."
        />
      </div>
    </div>
  );
};

export default ServicesManagement;
