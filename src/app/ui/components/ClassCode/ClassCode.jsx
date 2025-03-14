import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Typography } from '@mui/material';

const ClassCode = ({classroom}) => {
  return (
  


  <Box 
    sx={{ 
      border: "1px solid", 
      borderColor: "#c3c4c5", 
      borderRadius: 2, 
      boxShadow: 3, 
      p: 1 
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography 
        variant="body2" 
        sx={{ color: "#374151" }}
      >
        Class code
      </Typography>
      <IconButton aria-label="More options">
        <MoreVertIcon sx={{ color: "#374151" }} />
      </IconButton>
    </Box>
    <Typography 
      variant="h6" 
      sx={{ color: "#1a73e8", fontWeight: "500", fontSize: "1.4rem" }}
    >
      {classroom.code}
    </Typography>
  </Box>

  )
}

export default ClassCode