import React, { useState } from 'react'
import { Box,TextField, Typography , Button ,Card,CardActions,Alert } from '@mui/material'
import { signInStudent } from '../../firebase_functions'
import {Hearts} from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";


const LoginFormStudent = ({setFormType}) => {
    let navigate = useNavigate();
    const [email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[sucess,setSucess]=useState("firstrun")
    const handleSignin=async()=>{
      setSucess("start")
      await signInStudent(email,pass,setSucess)
    }
    if (sucess==true) {
      navigate('/studentDashboard/assignment')
    }
  return (
    sucess=="start"?(
      <Hearts  height="500"
        width="500"
        color='hotpink'
        ariaLabel='loading'/>
    ):(
<Card style={{width:400,height:500}}>
{sucess==false ? (
          <Alert severity="error">Account with email Already exists.</Alert>
        ) :(
          <></>
        )}
    <Box>
        <Typography variant='h5' >sign In for students</Typography>
        
        <Box>
            <TextField onChange={(e)=>{setEmail(e.target.value)}}
            style={{ width: "250px", margin: "5px" }}
            type="email"
            label="Email"
            variant="outlined" />
            <br />
            <TextField onChange={(e)=>{setPass(e.target.value)}}
            style={{ width: "250px", margin: "5px" }}
            type="password"
            label="Password"
            variant="outlined" />
        </Box>
        <Button onClick={(e)=>{handleSignin()}} variant='contained' >Log In</Button>
        <br />
        <Button onClick={(e)=>{ setFormType("studentNew")}} color="secondary" variant='outlined' >No account? Sign Up!!</Button>
    </Box>
    <CardActions>
        <Button onClick={(e)=>{ setFormType("teacher")}} size="small">Sign in as Teacher</Button>
      </CardActions>
    </Card>
    )

    
  )
}

export default LoginFormStudent