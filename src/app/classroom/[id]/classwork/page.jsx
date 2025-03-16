"use client";
import ClassroomHeader from "@/app/ui/components/ClassroomHeader/ClassroomHeader";
import { classrooms } from "@/data/data";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Menu from "@mui/material/Menu";
import Fade from '@mui/material/Fade';
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/slices/loadingSlice";

export default function ClassworkContent() {
  const classroom = classrooms.find(
    (classroom) => classroom.id === Number(useParams().id)
  );
  if (!classroom) {
    return <div>Classroom not found</div>;
  }
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(setLoading(false))
},[])

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box>
        <ClassroomHeader classroomId={classroom.id} />
      </Box>

      <Box>
       
      <Box sx={{margin:2}}>
      <Button
        sx={{py:2 ,px:3 ,m:2, borderRadius:50}}
        variant="contained"
        startIcon={<AddIcon />}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Create
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open} 
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={()=>dispatch(setLoading(true))}><Link style={{textDecoration: "none",color:"black"}} href={`/classroom/${classroom.id}/classwork/create`}>Assignment</Link></MenuItem>
        <MenuItem onClick={handleClose}>Question</MenuItem>
        <MenuItem onClick={handleClose}>Matirail</MenuItem>
      </Menu>
    </Box>
      </Box>
    </Box>
  );
}
