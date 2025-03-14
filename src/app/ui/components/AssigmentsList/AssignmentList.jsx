"use client";
import { useSelector } from 'react-redux';
import AssignmentCard from '../AssignmentCard/AssignmentCard';
import { Box } from '@mui/material';

const AssignmentList = ({ classroom }) => {
  const assignments = useSelector((state) =>
    state.assignments.assignments.filter(
      (a) => a.classroomId === classroom.id
    )
  );

 
  
  return (
    <Box>
      {assignments.map((assignment) => (
        <AssignmentCard classroom={classroom} key={assignment.id} assignment={assignment} />
      ))}
    </Box>
  );
};

export default AssignmentList;