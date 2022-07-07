import React from 'react'
import { useOutletContext } from "react-router-dom";
import { AppBar, Button, Typography } from '@mui/material';

const Profile = () => {
    const info=useOutletContext()
  
    return (
    <div>
    <AppBar style={{height:"60px"}} position="static"><Typography variant='h3'>Profile</Typography></AppBar>
        <Typography variant='h2'>Name-{info.name}</Typography>
        <Typography variant='h2'>Email-{info.email}</Typography>
        <Button>Update</Button>
    </div>
  )
}

export default Profile