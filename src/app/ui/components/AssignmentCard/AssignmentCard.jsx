"use client";
import Link from 'next/link';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Box, Menu, MenuItem, Typography } from '@mui/material';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import React, { useState } from 'react';
import Fade from '@mui/material/Fade';
import { useDispatch } from 'react-redux';
import { deleteAssignment } from '@/redux/slices/assignmentSlice';
import { setLoading } from '@/redux/slices/loadingSlice';

const AssignmentCard = ({ classroom, assignment }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAssignment(assignment.id));
  };

  return (
   
     <>
      
    
      <Box sx={{
        boxShadow: 2,
        ml: { lg: 1, xl: 1, '2xl': 1 },
        my: 1,
        p: 2,
        border: 1,
        borderColor: '#c3c4c5',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 2
      }}>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ display:"flex", justifyContent:"center" , alignItems:'center', p: 1, borderRadius: '50%', bgcolor: classroom.color }}>
      <AssignmentIcon sx={{color:"white"}} />
    </Box>
    <Link key={classroom.id} style={{textDecoration: "none",color:'#3c4043'}} onClick={()=>dispatch(setLoading(true))} href={`/classroom/${classroom.id}/classwork/create/${assignment.id}`}>
      <Typography  variant='body2' sx={{ ml: 2, fontWeight: 500, fontFamily: "'Google Sans', sans-serif" }}>
        Abuzar Ali posted a new Assignment: {assignment.title}
      </Typography>
    </Link>
  </Box>
  <IconButton
    id="fade-button"
    aria-controls={open ? 'fade-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
 
    aria-label="More options"
  >
    <MoreVertIcon sx={{ color: 'gray.500' }} />
  </IconButton>
  <Menu
    id="fade-menu"
    MenuListProps={{ 'aria-labelledby': 'fade-button' }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    TransitionComponent={Fade}
  >
    <MenuItem onClick={()=>dispatch(setLoading(true))}>
      <Link style={{textDecoration: "none",color:'black'}} href={`/classroom/${classroom.id}/classwork/create/${assignment.id}/edit`}>Edit</Link>
    </MenuItem>
    <MenuItem onClick={handleDelete}>Delete</MenuItem>
    <MenuItem onClick={handleClose}>Move</MenuItem>
  </Menu>
</Box>

 

     </>
  );
};

export default AssignmentCard;