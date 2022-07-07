import React, { useState } from 'react'
import { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import { returnAssignments } from '../../firebase_functions';
import AssignmentCard from './AssignmentCard';
import { AppBar, Typography } from '@mui/material';
const Assignment = () => {
    const [ass,setAss]=useState()
    const info=useOutletContext()
    useEffect(()=>{
        const getAssignments=async()=>{
            const data=await returnAssignments()
            console.log(data.docs.map((ass)=>({...ass.data(),id:ass.id})))
            setAss(data.docs.map((ass)=>({...ass.data(),id:ass.id})))
            console.log("ass use effect is running")
        }
        getAssignments()
    },[])
    console.log(ass)
  return (
    <>
    <AppBar style={{height:"60px"}} position="static"><Typography variant='h3'>Assignments</Typography></AppBar>
    <div style={{ display:"flex",marginLeft:"100px"}}>
    { !ass ? (
                <>
                    loading
                </>
            ):  (
                ass?.map((content)=>
                <>
                {console.log(content)}
                <AssignmentCard key={content.id} ass={content} type="ass" />
                </>
                )
            )
           }
  </div>
  </>
  )
}

export default Assignment