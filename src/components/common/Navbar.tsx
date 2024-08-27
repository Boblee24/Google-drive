import logo from "../../assets/drive-48.svg";
import {
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Squares2X2Icon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/solid";
import { auth } from "../../config/firebase";
import { useRef } from "react";
import ProfileModal from "../layout/modal/ProfileModal";
import useToggle from "../../hooks/useToggle";

const Navbar = () => {
  const {isOpen, handleModalClick} = useToggle()
  const profilePicRef = useRef<HTMLDivElement>(null!);
  // const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  return (
    <div className="flex items-center w-full h-full relative">
      <a href="/" className="flex items-center">
        <div className="w-9">
          <img src={logo} alt="drive_logo" className="w-9 h-9" />
        </div>
        <h1 className="text-[28px]">Drive</h1>
      </a>
      <div className="relative flex items-center text-black focus-within:text-black ml-40 w-full">
        <MagnifyingGlassIcon className="absolute h-5 w-5 ml-3 pointer-events-none" />
        <input
          type="search"
          name="search"
          placeholder="Search in Drive"
          autoComplete="off"
          aria-label="Search talk"
          className=" w-full pr-3 pl-12 py-2 max-w-[810px] h-12 placeholder-gray-500 bg-[#cddee0] focus:bg-white rounded-3xl
            border-none focus:shadow-lg ring-gray-200 focus:ring-gray-500 focus:outline-none"
        />
      </div>
      <div className="flex gap-5 ml-auto">
        <Cog6ToothIcon className="w-7 h-7" />
        <QuestionMarkCircleIcon className="w-7 h-7" />
        <Squares2X2Icon className="w-7 h-7" />
        <div ref={profilePicRef} onClick={handleModalClick} className="rounded-full w-8 h-8 border-2 border-[gray] border-solid ">
          <img src={auth.currentUser?.photoURL || ""} alt="user-dp" className="rounded-full w-8 h-8" />
        </div>
        <ProfileModal isOpen={isOpen} onClose={handleModalClick} />
      </div>
    </div>
  );
};

export default Navbar;
