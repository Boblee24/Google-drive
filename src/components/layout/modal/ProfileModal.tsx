import { XMarkIcon } from "@heroicons/react/24/outline";
import { auth } from "../../../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
  isOpen: boolean;
  onClose: () => void;
  // position: {left : number, top : number};
  // children: React.ReactNode
}
const ProfileModal: React.FC<ProfileProps> = ({ isOpen, onClose }) => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate("/signin")
    } catch (error) {
      console.log("Can't sign this shit out")
    }
  }
  return (
    <div
      className={`absolute bg-white p-6 transition-opacity duration-700 ease-in-out rounded-lg shadow-lg w-[399px] top-10 z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } right-0`}
      //   style={{
      //       top: position.top,
      //       left: position.left,
      //   }}
    >
      <button onClick={onClose} className="absolute top-2 right-2">
        <XMarkIcon className="w-6 h-6" />
      </button>
      <div>
        <div className="flex justify-center">
          <img
            src={user?.photoURL || ""}
            alt="user"
            className="w-16 h-16 rounded-full"
          />{" "}
          {/* this got the user display picture from the api */}
        </div>
        <h2 className="font-semibold text-[1.3rem]">Hello, {user?.displayName?.split(" ")[1]}</h2>
        {/** TODO: Add user name by cutting of the first name **/}
      </div>
      <div className="flex justify-center m-4">
        <button onClick={handleSignOut} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
        Sign The Fuck Out
      </button>
      </div>
      
      <div className="flex justify-center  gap-5 text-[#727272b2]">
        <a href="#">Privacy Policy</a>
        .
        <a href="#">Terms of Services</a>
      </div>
    </div>
  );
};

export default ProfileModal;
