import { FolderArrowDownIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";

const NewUpload: React.FC<{ isVisible: boolean; closeModal: () => void }> = ({ isVisible, closeModal }) => {
  return (
    <div
      className={`fixed bg-white w-80 h-52 z-50 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="px-2 py-1 my-2 hover:bg-[#cddee0]">
        <button className="flex gap-4">
          <FolderIcon className="w-6 h-6"/>
          <h1>New Folder</h1>
        </button>
      </div>
      <hr />
      <div className="px-2 py-1 my-2 hover:bg-[#cddee0]">
        <button className="flex gap-4" onClick={() => console.log("create file")}>
          <FolderArrowDownIcon className="w-6 h-6"/>
          <h1>File Upload</h1>
        </button>
      </div>
      <div className="px-2 py-1 my-2 hover:bg-[#cddee0]">
        <button className="flex gap-4 " onClick={() => console.log("create folder")}>
          <FolderArrowDownIcon className="w-6 h-6"/>
          <h1>Folder Upload</h1>
        </button>
      </div>
      <hr />
      <XMarkIcon className="w-6 h-6 absolute top-1 right-1" onClick={closeModal} />
    </div>

  )
}

export default NewUpload