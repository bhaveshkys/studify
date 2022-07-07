import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { returnUserInfo } from "../../firebase_functions";
import { Circles } from "react-loader-spinner";
import Assignment from "../../components/studentPortal/Assignment";
import { Outlet } from "react-router-dom";
const StudentPortal = ({user}) => {
    const [userInfo,setuserInfo]=useState(null)
    console.log(userInfo)
    /* returnUserInfo(user?.email) */
    useEffect(()=>{
        const getInfo=async()=>{
           const data=await returnUserInfo(user?.email)
            setuserInfo(data[0])
       }
        getInfo()
    },[user])
  return (
    <>
    <Navbar/>
    {userInfo==null?(
        <div style={{margin:"auto" ,display:"flex",flexDirection:"row",justifyContent:"space-around"}} >
        <Circles  color="#00BFFF" height={500} width={500} />
        </div>
    ):(
        <>
        <Outlet context={userInfo} />
        </>
    )
    }
    </>
  )
}

export default StudentPortal