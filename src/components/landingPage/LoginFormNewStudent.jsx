import React, { useState } from 'react'
import { Box,TextField, Typography , Button ,Card,CardActions,Alert } from '@mui/material'
import { async } from '@firebase/util'
import newStudentSchema from './Validation'
import { registerNewUser } from '../../firebase_functions'
import { useEffect } from 'react'
import {db,auth} from "../../firebase"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Hearts} from 'react-loader-spinner'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const LoginFormNewStudent = ({setFormType}) => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[roll,setRoll]=useState("")
    const[valid,setvalid]=useState(true)
    const[sucess,setSucess]=useState("firstrun")
    const handleSignUp=async()=>{
      const details={
        name:name,
        email:email,
        password:pass,
        rollnumber:roll
      }
      const dbDetails={
        name:name,
        email:email,
        rollnumber:roll
      }
      const isv = await newStudentSchema.isValid(details)
      setvalid(isv)
      if (isv) {
        setSucess("start")
        await registerNewUser(dbDetails,email,pass,setSucess)
      }
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
        <Typography variant='h5' >sign up for New students</Typography>
        {
        !valid ? (
          <Alert severity="error">empty input fields</Alert>
        ) :(
          <></>
        ) 
      }
      {sucess==false ? (
          <Alert severity="error">Account with email Already exists.</Alert>
        ) :(
          <></>
        )}
        
        <Box>
            <TextField onChange={(e)=>{setName(e.target.value)}}
            style={{ width: "250px", margin: "5px" }}
            type="text"
            label="Name"
            variant="outlined" />
            <TextField onChange={(e)=>{setEmail(e.target.value)}}
            style={{ width: "250px", margin: "5px" }}
            type="email"
            label="email"
            variant="outlined" />
            <br />
            <TextField onChange={(e)=>{setRoll(e.target.value)}}
            style={{ width: "250px", margin: "5px" }}
            type="text"
            label="Roll number"
            variant="outlined" />
            <TextField onChange={(e)=>{setPass(e.target.value)}}
            style={{ width: "250px", margin: "5px" }}
            type="password"
            label="Password"
            variant="outlined" />
        </Box>
        <Button onClick={(e)=>{handleSignUp()}} variant='contained' >Sign Up</Button>
        <br />
        <Button onClick={(e)=>{setFormType("student")}} color="secondary" variant='outlined' >Already have an account? , Log in here!!</Button>
    </Box>
    {sucess==true ? (        
          <Alert severity="success">Account Created !!</Alert>
        ) :(
          <></>
        )}
    <CardActions>
        <Button onClick={(e)=>{ setFormType("teacher")}} size="small">Sign in as Teacher</Button>
      </CardActions>
    </Card>
      )
    
    
  )
}

export default LoginFormNewStudent