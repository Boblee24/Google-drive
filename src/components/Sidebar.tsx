import { PlusIcon } from "@heroicons/react/20/solid"
import { ClockIcon, CloudIcon, ComputerDesktopIcon, HomeIcon, InformationCircleIcon, ShareIcon, StarIcon, TrashIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import Main from "./Main"

const Sidebar = () => {
  return (
    <div className="py-4 flex flex-grow gap-4 w-full sidebar">
      <div className="w-64">
        <button className="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-xl">
        <PlusIcon className="h-7 w-7 text-black" />
        <h1 className="text-lg">New</h1>
      </button>
      <div className="flex flex-col gap-4 my-2">
        <div className="">
          <Link to="/" className="flex items-center active:bg-[red] gap-4  my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>Home</h2>
          </Link>
            <Link to="drive" className="flex items-center gap-4  my-2 hover:bg-slate-500 active:bg-[red] duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>My Drive</h2>
          </Link>
          <Link to="computer" className="flex items-center gap-4  my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <ComputerDesktopIcon className="h-6 w-6" />
            <h2>Computers</h2>
          </Link>
        </div>
        <div className="">
          <Link to="shared" className="flex items-center gap-4  my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <ShareIcon className="h-6 w-6" />
            <h2>Shared</h2>
          </Link>
          <Link to="recent" className="flex items-center gap-4  my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <ClockIcon className="h-6 w-6" />
            <h2>Recent</h2>
          </Link>
          <Link to="starred" className="flex items-center gap-4  my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
              <StarIcon className="h-6 w-6" />
            <h2>Starred</h2>
          </Link>
        </div>
        <div className="">
          <Link to="spam" className="flex items-center gap-4  my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <InformationCircleIcon className="h-6 w-6" />
            <h2>Spam</h2>
          </Link>
          <Link to="trash" className="flex items-center gap-4  my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <TrashIcon className="h-6 w-6" />
            <h2>Trash</h2>
          </Link>
          <Link to="storage" className="flex items-center gap-4  my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <CloudIcon className="h-6 w-6" />
            <h2>Storage</h2>
          </Link>
        </div>
      </div>
      </div>
      <div className="flex-grow">
        <Main/>
      </div>

    </div>
  )
}
export default Sidebar