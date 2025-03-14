"use client";
import AssignmentForm from '@/app/ui/components/AssignmentForm/AssignmentForm';
import { classrooms } from '@/data/data';
import { setLoading } from '@/redux/slices/loadingSlice';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

export default function EditAssignmentPage() {
  const params = useParams();
  const assignmentId = params.assignmentId;
  const assignments = useSelector((state) => state.assignments.assignments);
  const assignment = assignments.find(
    (assignment) => assignment.id === assignmentId
  );
  
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

  return(
    <Box>
    <Typography
     variant="h4"
     sx={{
     fontSize: "1.5rem",
     fontWeight: 500,
     fontFamily: "'Google Sans', sans-serif",
     my: 2,
     textShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)", 
    }}
>
  Create Assignment
</Typography>

    <Box>
      <AssignmentForm classroomId={classroom.id} assignment={assignment} />
    </Box>
    </Box>
  )
  
}