"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import { classrooms } from "@/data/data";
import Grid from '@mui/material/Grid';
import { setLoading } from "@/redux/slices/loadingSlice";
import { useDispatch } from "react-redux";



const HomeComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(false));

  },[])

  return (
  <Box sx={{padding:"15px" }}>
    <Grid container spacing={4}>
      {classrooms.map((item) => (
        <Grid item key={item?.id} xs={12} sm={12} md={6} lg={4} xl={4}>
          <Link onClick={()=>dispatch(setLoading(true))} href={`/classroom/${item?.id}`} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${item.img})`,
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  paddingX: "12px",
                  marginBottom: "120px",
                  backgroundColor: "rgba(55, 65, 81, 0.5)",
                  backgroundBlendMode: "multiply",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "100px",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: "1.25rem",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.class}
                </Typography>
  
                <Box>
                  <IconButton aria-label="More options">
                    <MoreVertIcon sx={{ color: "rgba(249, 250, 251, 1)" }} />
                  </IconButton>
                </Box>
              </Box>
  
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop:"30px",
                  borderTop: "1px solid rgba(209, 213, 219, 1)",
                }}
              >
                <IconButton aria-label="Open folder">
                  <FolderOpenIcon />
                </IconButton>
                <IconButton aria-label="View trends">
                  <TrendingUpIcon />
                </IconButton>
              </Box>
            </Card>
          </Link>
        </Grid>
      ))}
      </Grid>
      </Box>

      
  
  );
};
export default HomeComponent;
