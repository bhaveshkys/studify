import React from 'react'
import { AppBar,Typography } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { returnAssignments } from '../../firebase_functions'
import AssignmentCard from '../studentPortal/AssignmentCard'
const Results = () => {
    const[result,setResult]=useState()
    useEffect(()=>{
        const getAssignments=async()=>{
            const data=await returnAssignments()
            console.log(data.docs.map((ass)=>({...ass.data(),id:ass.id})))
            setResult(data.docs.map((ass)=>({...ass.data(),id:ass.id})))
            console.log("ass use effect is running")
        }
        getAssignments()
    },[])
  return (
    <div>
    <AppBar style={{height:"60px"}} position="static"><Typography variant='h3'>Results</Typography></AppBar>
    <div style={{ display:"flex",marginLeft:"100px"}}>
    { !result ? (
                <>
                    loading
                </>
            ):  (
                result?.map((content)=>
                <>
                {console.log(content)}
                <AssignmentCard key={content.id} ass={content} type="result" />
                </>
                )
            )
           }
  </div>
    </div>
  )
}

export default Results