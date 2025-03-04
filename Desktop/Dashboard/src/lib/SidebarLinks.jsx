import { FaRegUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";
import { RiSettings3Fill } from "react-icons/ri";
import { TbStarsFilled } from "react-icons/tb";
import { GrServices } from "react-icons/gr";

export const ADMINSIDEBARITEMS = [
  {
    key: "Dashboard",
    text: "Dashboard",
    link: "overview",
    Icon: MdDashboard,
  },
  {
    key: "profilesManagement",
    text: "Profiles Management",
    link: "profilesManagement",
    Icon: FaRegUser,
  },
  {
    key: "Payment",
    text: "Payment",
    link: "payment",
    Icon: MdOutlinePayment,
  },
  {
    key: "Requests",
    text: "Requests",
    link: "requests",
    Icon: RiQuestionnaireLine,
  },
  {
    key: "ServicesManagement",
    text: "Services Management",
    link: "servicesManagement",
    Icon: GrServices,
  },
  {
    key: "Reviews",
    text: "Reviews",
    link: "reviews",
    Icon: TbStarsFilled,
  },
];
