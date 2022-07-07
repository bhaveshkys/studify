import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import LoginFormNewStudent from './LoginFormNewStudent'
import LoginFormStudent from './LoginFormStudent'
import LoginFormTeacher from './LoginFormTeacher'
import "./style.css"
const Login = () => {
    const [formType,setFormType]=useState("student")
    console.log(formType)
  return (
    <>
    <div style={{marginTop:100, display:"grid" ,gridTemplateColumns:"repeat(5, 1fr)" , gridTemplateRows:"repeat(5, 1fr)"}}>
    
    <div  className='bg'  style={{ fontFamily:"Playfair Display" , gridArea:"1 / 1 / 6 / 4"}}>
    <Typography variant='h2' style={{ textAlign:"initial" ,fontFamily:"Playfair Display"}} >
    The New and better way to study 
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M22.7,-46.3C29.8,-35.2,36.1,-29.8,45.2,-23.1C54.4,-16.3,66.4,-8.2,69.3,1.7C72.2,11.5,65.9,23,59.8,34.9C53.6,46.9,47.5,59.3,37.5,66.1C27.6,72.9,13.8,74.2,3.3,68.4C-7.1,62.7,-14.3,49.9,-25.4,43.7C-36.5,37.6,-51.6,38.1,-61.6,31.9C-71.6,25.7,-76.5,12.8,-74.2,1.3C-72,-10.2,-62.5,-20.4,-52.8,-27.1C-43.1,-33.8,-33.1,-36.9,-24.2,-46.9C-15.4,-57,-7.7,-74,0.1,-74.1C7.8,-74.2,15.6,-57.4,22.7,-46.3Z" transform="translate(100 100)" />
</svg>
    </Typography>
    </div>
    <div style={{gridArea:"1 / 4 / 6 / 6"}}>
        {formType=="student" ?(
            <LoginFormStudent setFormType={setFormType} />
        ):(formType=="studentNew"?(
            <LoginFormNewStudent setFormType={setFormType} />
        ):(
            <LoginFormTeacher setFormType={setFormType}/>
        ))}
        
    </div>
    </div>
    </>
  )
}

export default Login