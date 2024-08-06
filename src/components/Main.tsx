import { Route, Routes } from "react-router-dom"
import Route_home from "../pages/routes/route_home"
import My_drive from "../pages/routes/My_drive"
import Computers from "../pages/routes/Computers"
import Shared from "../pages/routes/Shared"
import Recent from "../pages/routes/Recent"
import Starred from "../pages/routes/Starred"
import Spam from "../pages/routes/Spam"
import Trash from "../pages/routes/Trash"
import Storage from "../pages/routes/Storage"
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline"

interface MainProps {
  isDetail: boolean;
  handleDetail: () => void;
}
const Main: React.FC<MainProps> = ({handleDetail, isDetail}) => {
  return (
    <div className='bg-white w-full h-full flex-grow rounded-3xl p-4 m-auto text-3xl font-bold flex justify-between items-start'>
      <Routes>
        <Route path="/" element={<Route_home/>} />
        <Route path="/drive" element={<My_drive/>} />
        <Route path="/computer" element={<Computers/>} />
        <Route path="/shared" element={<Shared/>} />
        <Route path="/recent" element={<Recent/>} />
        <Route path="/starred" element={<Starred/>} />
        <Route path="/spam" element={<Spam/>} />
        <Route path="/trash" element={<Trash/>} />
        <Route path="/storage" element={<Storage/>} />
      </Routes>
      <button onClick={handleDetail} className={`${isDetail ? "" : "bg-slate-200 p-3 rounded-full"} `}>
        <QuestionMarkCircleIcon className="w-6 h-6"/>
      </button>
    </div>
  )
}

export default Main