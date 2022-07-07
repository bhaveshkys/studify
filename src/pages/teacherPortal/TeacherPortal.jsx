import React from 'react'
import Navbar from '../../components/navbar/TeacherNavbar'
import { Outlet } from "react-router-dom";

const TeacherPortal = () => {
  return (

    <div>
    <Navbar/>    
    <Outlet  />
    </div>
  )
}

export default TeacherPortal