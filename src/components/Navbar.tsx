import logo from "../assets/drive-48.svg";
import {
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div>
      <a href="/" className="flex items-center">
        <div>
          <img src={logo} alt="drive_logo" className="" />
        </div>
        <h1 className="text-2xl">Drive</h1>
      </a>
      <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 ">
        <MagnifyingGlassIcon className="absolute h-5 w-5 ml-3 pointer-events-none" />
        <input
          type="search"
          name="search"
          placeholder="Search in Drive"
          autoComplete="off"
          aria-label="Search talk"
          className="pr-3 pl-12 py-2 placeholder-gray-500 rounded-3xl
            border-none ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2 focus:outline-none"
        />
      </div>
      <div>
        <Cog6ToothIcon className="w-6 h-6" />
        <QuestionMarkCircleIcon className="w-6 h-6" />
        <Squares2X2Icon className="w-6 h-6"/>
      </div>
    </div>
  );
};

export default Navbar;
