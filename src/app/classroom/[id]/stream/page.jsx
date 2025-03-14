"use client";
import AssignmentList from "@/app/ui/components/AssigmentsList/AssignmentList";
import ClassroomHeader from "@/app/ui/components/ClassroomHeader/ClassroomHeader";
import { classrooms } from "@/data/data";
import { Box, Typography} from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import ClassCode from "@/app/ui/components/ClassCode/ClassCode";
import { setLoading } from "@/redux/slices/loadingSlice";
import { useDispatch } from "react-redux";
import GoogleMeetCard from "@/app/ui/components/MeetCard/MeetCard";
import AnnouncementCard from "@/app/ui/components/AnnouncementCard/AnnouncementCard";

export default function StreamContent({ params }) {
  const dispatch = useDispatch();
  const classroom = classrooms.find(
    (classroom) => classroom.id === Number(useParams().id)
  );
  if (!classroom) {
    return <div>Classroom not found</div>;
  }
  
  useEffect(()=>{
    dispatch(setLoading(false))
  },[])
  return (
    <Box>
    <ClassroomHeader classroom={classroom} classroomId={classroom.id} />
  
    <Box sx={{ maxWidth: "100%", margin: "auto", mt: 4, px: { md:2, lg: 3, xl: 3 } }}>
      <Box
        sx={{
          backgroundImage: `url(${classroom.img})`,
          height: "240px",
          borderRadius: "8px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
       <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "white",
            position: "absolute",
            bottom: "20px",
            left: "20px",
            transform: "translate(-10px, 10px)",
          }}
        >
          {classroom.class}
        </Typography>
      </Box>
  
      <Box sx={{ mt: 4, display: "flex", flexDirection: { xs: "column", lg: "row" } }}>
        <Box sx={{ display: { xs: "none", lg: "block" }, width: { lg: "25%" } }}>
          <GoogleMeetCard/>
          <ClassCode sx={{ mt: 2 }} classroom={classroom} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <AnnouncementCard/>
          <AssignmentList classroom={classroom} classroomId={params.classroomId} />
        </Box>
      </Box>
    </Box>
  </Box>
  );
}
