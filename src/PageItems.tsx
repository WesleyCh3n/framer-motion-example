import Menu from "./AnimatedMenu";
import Navbar from "./Navbar";
import Popover from "./Popover";
import ReorderList from "./ReorderList";
import ScrollLink from "./ScrollLink";

export const PageItems = [
  {
    className: "w-[332px] h-28 bg-white drop-shadow-2xl absolute",
    item: <Menu />,
  },
  {
    className: "w-1/3 bg-white drop-shadow-2xl absolute",
    item: <ReorderList />,
  },
  {
    className: "w-1/3 h-2/3 bg-white drop-shadow-2xl absolute",
    item: <ScrollLink />,
  },
  {
    className: "w-96 h-72 block bg-slate-50 drop-shadow-2xl absolute",
    item: <Popover />,
  },
  {
    className:
      "w-1/2 h-1/2 block bg-slate-50 drop-shadow-2xl absolute overflow-clip",
    item: <Navbar />,
  },
];
