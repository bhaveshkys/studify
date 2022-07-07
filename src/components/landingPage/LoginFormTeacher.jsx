import React, { useState } from 'react'
import { Box,TextField, Typography , Button ,Card,CardActions,Alert } from '@mui/material'
import { teacherLogIn } from '../../firebase_functions'
import { Hearts } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";

const LoginFormTeacher = ({setFormType}) => {
  let navigate = useNavigate();

    const [email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[sucess,setSucess]=useState("firstrun")
    const handleTeacher=async()=>{
      setSucess("start")
      teacherLogIn(email,pass,setSucess)
    }
    if (sucess==true) {
      navigate('/teacherDashBoard/student')
    }
  return (
    sucess=="start"?(
      <Hearts  height="500"
        width="500"
        color='hotpink'
        ariaLabel='loading'/>
    ):(
      <Card style={{width:400,height:500}}>
    <Box>
      <div style={{color:"red"}} > FOR DEMO PURPOSE : TEACHER EMAIL:teacher@gmail.com    teacher password : test123</div>
        <Typography variant='h5' >sign up Teachers</Typography>
        {sucess==false ? (
          <Alert severity="error">Incorrect Credentials.</Alert>
        ) :(
          <></>
        )}
        
        <Box>
            <TextField onChange={(e)=>{setEmail(e.target.value)}}
            style={{ width: "250px", margin: "5px" }}
            type="email"
            label="email"
            variant="outlined" />
            <br />
            <TextField onChange={(e)=>{setPass(e.target.value)}}
            style={{ width: "250px", margin: "5px" }}
            type="text"
            label="Password"
            variant="outlined" />
        </Box>
        <Button onClick={(e)=>{handleTeacher()}} variant='contained' >Sign Up</Button>
        <br />
    </Box>
    <CardActions>
        <Button onClick={(e)=>{ setFormType("student")}} size="small">Sign in as Student</Button>
      </CardActions>
    </Card>
    )
    
  )
}

export default LoginFormTeacher