import "./styles/App.scss"
import Navbar from './Components/Navbar/Navbar'

import HomePage from "./Pages/HomePage"
import { Outlet } from "react-router-dom"
import Navbar2 from "./Components/Navbar/Navbar2"



function App() {
  

  return (
    <>
    <header className="fixed top-0 left-0 w-[100%] z-50">
    <Navbar2/> 
    </header>
    <Outlet/>
   


</>
  )
}

export default App
