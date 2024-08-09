import React from "react"
import Navbar from "../components/common/Navbar"
import Sidebar from "../components/common/Sidebar"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col p-2">
        <Navbar/>
        <Sidebar/>

    </div>
  )
}

export default Home