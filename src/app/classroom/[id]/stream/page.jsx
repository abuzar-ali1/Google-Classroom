"use client";
import { classrooms } from "@/data/data";
import { Box, Typography} from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";




export default function StreamContent({ params }) {
  const classroom = classrooms.find(
    (classroom) => classroom.id === Number(useParams().id)
  );
  if (!classroom) {
    return <div>Classroom not found</div>;
  }
  

  return (
    <Box>

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
  
      
    </Box>
  </Box>
  );
}
