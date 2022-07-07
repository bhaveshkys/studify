import React from 'react'
import { AppBar,Typography } from '@mui/material'
import { useState } from 'react'
import { returnStudents } from '../../firebase_functions'
import { useEffect } from 'react'
const Students = () => {
    const[student,setStudent]=useState()
  useEffect(()=>{
    const getStudents=async()=>{
        const data =await returnStudents()
        setStudent(data.docs.map((stu)=>({...stu.data(),id:stu.id})))
        console.log("student use effect is running")
    }
    getStudents()
  },[])
  console.log(student)
    return (

    <div>
    <AppBar style={{height:"60px"}} position="static"><Typography variant='h3'>Students</Typography></AppBar>
    <div style={{ display:"block",textAlign:"left",marginLeft:"100px"}}>
    { !student ? (
                <>
                    loading
                </>
            ):  (
                student?.map((content)=>
                <>
                {console.log(content)}
                <div> name : {content.name} </div>
                <div> email : {content.email} </div>
                <div> roll number : {content.rollnumber} <br /> <br /><br /><br /></div>
                
                </>
                )
            )
           }
  </div>
    </div>
  )
}

export default Students