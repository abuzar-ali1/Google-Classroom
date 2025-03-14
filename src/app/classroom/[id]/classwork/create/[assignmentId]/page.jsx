"use client";
import AssignmentDetails from "@/app/ui/components/AssignmentDetails/AssignmentDetails";
import { classrooms } from "@/data/data";
// import { setLoading } from "@/redux/slices/loadingSlice";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

const AssignmentIdpage =   () => {
  const {assignmentId} = useParams()
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setLoading(false));
  // }, []);


  const classroom = classrooms.find(
    (classroom) => classroom.id === Number(useParams().id)
  );
  if (!classroom) {
    return <div>Classroom not found</div>;
  } 
  
  // const assignments = useSelector((state) =>
  //   state.assignments.assignments.filter((a) => a.classroomId === classroom.id)
  // );
  // const assignment = assignments.find((a) => a.id === assignmentId);
  // if (!assignment) return <div>Assignment not found</div>;
 
  return <>
  <AssignmentDetails classroom={classroom} />
  
  </>;
};

export default AssignmentIdpage;
