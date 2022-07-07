import React from 'react'
import Popover from '@mui/material/Popover';
import AssignmentDetail from './AssignmentDetail';
import ResultDetail from '../teacherPortal/ResultDetail';
const AssignmentPopUp  = ({ ass,setPopUp,popUp, type=null}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
    setPopUp(false)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
    <Popover
    sx={{"maxWidth":1000}}
    anchorReference="anchorPosition"
    anchorPosition={{ top: 120, left: 608 }}
      id={id}
      open={popUp}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
    { type=="readonly"?(
        <ResultDetail ass={ass}/>
    ):(
    <AssignmentDetail ass={ass} />
    )}
    
    </Popover> 
  </div>
  )
}

export default AssignmentPopUp