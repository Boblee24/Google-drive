import { XMarkIcon } from "@heroicons/react/24/outline";
import { auth } from "../../../config/firebase";

interface ProfileProps {
    isOpen: boolean
    onClose: () => void
    // position: {left : number, top : number};
    // children: React.ReactNode
}
const ProfileModal: React.FC<ProfileProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
      <div
          className="absolute bg-white p-6 rounded-lg shadow-lg w-[299px] top-10 z-50 right-0"
        //   style={{
        //       top: position.top,
        //       left: position.left,
        //   }}
      >
          <button onClick={onClose} className="absolute top-2 right-2">
              <XMarkIcon className="w-6 h-6"/>
          </button>
          <div>
            <div className="flex justify-center">
              <img src={auth.currentUser?.photoURL || ""} alt="user" className="w-16 h-16 rounded-full"/> {/* this got the user display picture from the api */}
            </div>
        <h2>Hello, {auth.currentUser?.displayName?.split(' ')[1]}</h2>{/** TODO: Add user name by cutting of the first name **/}
          </div>
      </div>
  )
}

export default ProfileModal