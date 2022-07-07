import { Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box, height } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { uploadAnswer } from '../../firebase_functions'

const AssignmentDetail = ({ass}) => {
    const[ans,setAns]=useState()
    const info=useOutletContext()
  return (
    <>
    <div style={{ display:"flex",justifyContent:"space-around",height:"500px",width:"500px"}} >
        <div style={{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gridTemplateColumns:"repeat(4, 1fr)"}}>
        <div style={{gridArea:"1 / 1 / 2 / 5"}}>
             {ass.question}
        </div>
        <div style={{gridArea:"2 / 1 / 5 / 5"}}>
             <input onChange={(e)=>{setAns(e.target.value)}} style={{height:"300px",width:"300px"}}/>
             <Button onClick={(e)=>{uploadAnswer(ass,info,ans)}} >Submit</Button>
        </div>
        </div>
    </div>
        
    </>
  )
}

export default AssignmentDetail