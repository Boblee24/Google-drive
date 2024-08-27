import { PlusIcon } from "@heroicons/react/20/solid"
import { ClockIcon, CloudIcon, ComputerDesktopIcon, HomeIcon, InformationCircleIcon, ShareIcon, StarIcon, TrashIcon } from "@heroicons/react/24/outline"
import { ClockIcon as ClockIconSolid, CloudIcon as CloudIconSolid, ComputerDesktopIcon as ComputerDesktopIconSolid, HomeIcon as HomeIconSolid, InformationCircleIcon as InformationCircleIconSolid, ShareIcon as ShareIconSolid, StarIcon as StarIconSolid, TrashIcon as TrashIconSolid } from "@heroicons/react/24/solid";

import { Link, useLocation } from "react-router-dom"
import Main from "./Main"
import Details from "../../pages/Details";
import { useState } from "react";
import NewUpload from "../layout/modal/NewUpload";
import useToggle from "../../hooks/useToggle";

const Sidebar = () => {
  const {isOpen, handleModalClick} = useToggle()
  const [isDetail, setIsDetail] = useState<boolean>(true)
  // const [isUploadModalVisible, setIsUploadModalVisible] = useState<boolean>(false)
  const location = useLocation()
  const isActive = (path: string) => location.pathname == path
  const handleDetail = () => {
    setIsDetail(!isDetail)
  }
  // const handleNewButtonClick = () => {
  //   setIsUploadModalVisible(true)
  // }
  // const closeModal = () => {
  //   setIsUploadModalVisible(false)
  // }



  return (
    <div className="py-4 flex flex-grow gap-4 w-full sidebar">
      <div className="w-64">
        <button onClick={handleModalClick} className="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-xl">
        <PlusIcon className="h-7 w-7 text-black" />
        <h1 className="text-lg">New</h1>
      </button>
      <NewUpload isVisible = {isOpen} closeModal = {handleModalClick}  />
      <div className="flex flex-col gap-4 my-2">
        <div className="">
            <Link to="/" className={`flex items-center gap-4  my-2 ${isActive("/") ? "bg-[#afe5f3]" : ''} duration-300 px-8 p-1 rounded-3xl`}>
              {isActive("/") ? <HomeIconSolid className="h-6 w-6" /> : <HomeIcon className="h-6 w-6" />}
            <h2>Home</h2>
          </Link>
            <Link to="drive" className = {`flex items-center gap-4  my-2 hover:bg-[#cddee0] ${isActive("/drive") ? "bg-[#afe5f3]" : ''} duration-300 px-8 p-1 rounded-3xl`}>
              {isActive("/drive") ? <HomeIconSolid className="h-6 w-6" /> : <HomeIcon className="h-6 w-6" />}
            <h2>My Drive</h2>
          </Link>
            <Link to="computer" className={`flex items-center gap-4  my-2 hover:bg-[#cddee0] ${isActive("/computer") ? "bg-[#afe5f3]" : ''} duration-300 px-8 p-1 rounded-3xl`}>
              {isActive("/computer") ? <ComputerDesktopIconSolid className="h-6 w-6" /> : <ComputerDesktopIcon className="h-6 w-6" />}
            <h2>Computers</h2>
          </Link>
        </div>
        <div className="">
            <Link to="shared" className={`flex items-center gap-4  my-2 hover:bg-[#cddee0] ${isActive("/shared") ? "bg-[#afe5f3]" : ''} duration-300 px-8 p-1 rounded-3xl`}>
              {isActive("/shared") ? <ShareIconSolid className="h-6 w-6" /> : <ShareIcon className="h-6 w-6" />}
            <h2>Shared</h2>
          </Link>
            <Link to="recent" className={`flex items-center gap-4  my-2 hover:bg-[#cddee0] ${isActive("/recent") ? "bg-[#afe5f3]" : ''} duration-300 px-8 p-1 rounded-3xl`}>
              {isActive("/recent") ? <ClockIconSolid className="h-6 w-6" /> : <ClockIcon className="h-6 w-6" />}
            <h2>Recent</h2>
          </Link>
            <Link to="starred" className={`flex items-center gap-4  my-2 hover:bg-[#cddee0] ${isActive("/starred") ? "bg-[#afe5f3]" : ''} duration-300 px-8 p-1 rounded-3xl`}>
              {isActive("/starred") ? <StarIconSolid className="h-6 w-6" />  : <StarIcon className="h-6 w-6" /> }
            <h2>Starred</h2>
          </Link>
        </div>
        <div className="">
            <Link to="spam" className={`flex items-center gap-4  my-2 hover:bg-[#cddee0] ${isActive("/spam") ? "bg-[#afe5f3]" : ''} duration-300 px-8 p-1 rounded-3xl`}>
              {isActive("/spam") ? <InformationCircleIconSolid className="h-6 w-6" /> : <InformationCircleIcon className="h-6 w-6" />}
            <h2>Spam</h2>
          </Link>
            <Link to="trash" className={`flex items-center gap-4  my-2 hover:bg-[#cddee0] ${isActive("/trash") ? "bg-[#afe5f3]" : ''} duration-300 px-8 p-1 rounded-3xl`}>
              {isActive("/trash") ? <TrashIconSolid className="h-6 w-6" /> : <TrashIcon className="h-6 w-6" />}
            <h2>Trash</h2>
          </Link>
            <Link to="storage" className={`flex items-center gap-4  my-2 hover:bg-[#cddee0] ${isActive("/storage") ? "bg-[#afe5f3]" : ''} duration-300 px-8 p-1 rounded-3xl`}>
              {isActive("/storage") ? <CloudIconSolid className="h-6 w-6" /> : <CloudIcon className="h-6 w-6" />}
            <h2>Storage</h2>
          </Link>
        </div>
      </div>
      </div>
      <div className="flex-grow">
        <Main isDetail={isDetail} handleDetail = {handleDetail}/>
      </div>
      <div>
        <Details isDetail={isDetail} handleDetail={handleDetail} />
      </div>

    </div>
  )
}
export default Sidebar