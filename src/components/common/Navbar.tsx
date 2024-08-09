import logo from "../../assets/drive-48.svg";
import {
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Squares2X2Icon,
  MagnifyingGlassIcon
 } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="flex items-center w-full h-full">
      <a href="/" className="flex items-center">
        <div>
          <img src={logo} alt="drive_logo" className="" />
        </div>
        <h1 className="text-[28px]">Drive</h1>
      </a>
      <div className="relative flex items-center text-black focus-within:text-black ml-40">
        <MagnifyingGlassIcon className="absolute h-5 w-5 ml-3 pointer-events-none" />
        <input
          type="search"
          name="search"
          placeholder="Search in Drive"
          autoComplete="off"
          aria-label="Search talk"
          className="pr-3 pl-12 py-2 w-[810px] h-12 placeholder-gray-500 bg-[#cddee0] focus:bg-white rounded-3xl
            border-none focus:shadow-lg ring-gray-200 focus:ring-gray-500 focus:outline-none"
        />
      </div>
      <div className="flex gap-5 ml-auto">
        <Cog6ToothIcon className="w-7 h-7" />
        <QuestionMarkCircleIcon className="w-7 h-7" />
        <Squares2X2Icon className="w-7 h-7"/>
      </div>
    </div>
  );
};

export default Navbar;
