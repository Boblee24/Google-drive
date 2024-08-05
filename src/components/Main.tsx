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

const Main = () => {
  return (
    <div className='bg-white w-full h-full flex-grow rounded-3xl p-4 m-auto flex text-3xl font-bold items-center justify-center'>
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
    </div>
  )
}

export default Main