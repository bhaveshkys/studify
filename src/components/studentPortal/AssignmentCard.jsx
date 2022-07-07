import React from 'react'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import AssignmentPopUp from './AssignmentPopUp';
const AssignmentCard = ({key,ass,type}) => {
  const[popUp,setPopUp]=useState(false)
    
    const cardClickHandle=()=>{
        setPopUp(true)
      }
  return (
    
    <>
    {type=="ass"?(
        <>
        <AssignmentPopUp ass={ass} setPopUp={setPopUp} popUp={popUp} />
        <Card sx={{ marginLeft:100  ,minWidth: 250,maxWidth: 300,  height:200, margin: "10px" }}>
            <CardActionArea onClick={cardClickHandle}>
          
          <CardContent>
            
            <Typography noWrap variant="h6" component="div">
              {ass.question}
            </Typography>
            
            
          </CardContent>
          </CardActionArea>
        </Card>
        </>
    ):(
        <>
        <AssignmentPopUp  ass={ass} setPopUp={setPopUp} popUp={popUp} type="readonly"/>
<Card sx={{ marginLeft:100  ,minWidth: 250,maxWidth: 300,  height:200, margin: "10px" }}>
        <CardActionArea onClick={cardClickHandle}>
      
      <CardContent>
        
        <Typography noWrap variant="h6" component="div">
          {ass.question}
        </Typography>
        
        
      </CardContent>
      </CardActionArea>
    </Card>
    </>
    )
    }
  </>
  )
}

export default AssignmentCard