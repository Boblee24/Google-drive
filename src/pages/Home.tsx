import React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col p-4">
        <Navbar/>
        <Sidebar/>

    </div>
  )
}

export default Home