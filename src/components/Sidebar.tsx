import { PlusIcon } from "@heroicons/react/20/solid"
import { HomeIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import Main from "./Main"

const Sidebar = () => {
  return (
    <div className="py-4 flex flex-grow gap-4 w-full">
      <div className="w-64">
        <button className="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-xl">
        <PlusIcon className="h-7 w-7 text-black" />
        <h1 className="text-lg">New</h1>
      </button>
      <div className="flex flex-col gap-4 my-2">
        <div className="">
          <Link to="/" className="flex items-center gap-4 bg-slate-400 my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>Home</h2>
          </Link>
          <Link to="/" className="flex items-center gap-4 bg-slate-400 my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>Home</h2>
          </Link>
          <Link to="/" className="flex items-center gap-4 bg-slate-400 my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>Home</h2>
          </Link>
        </div>
        <div className="">
          <Link to="/" className="flex items-center gap-4 bg-slate-400 my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>Home</h2>
          </Link>
          <Link to="/" className="flex items-center gap-4 bg-slate-400 my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>Home</h2>
          </Link>
          <Link to="/" className="flex items-center gap-4 bg-slate-400 my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>Home</h2>
          </Link>
        </div>
        <div className="">
          <Link to="/" className="flex items-center gap-4 bg-slate-400 my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>Home</h2>
          </Link>
          <Link to="/" className="flex items-center gap-4 bg-slate-400 my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>Home</h2>
          </Link>
          <Link to="/" className="flex items-center gap-4 bg-slate-400 my-2 hover:bg-slate-500 duration-300 px-8 p-1 rounded-3xl">
            <HomeIcon className="h-6 w-6" />
            <h2>Home</h2>
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