"use client";
import AssignmentIcon from '@mui/icons-material/Assignment';
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Box, Card, CardContent, Typography, TextField, Button, Grid, Paper, Divider, IconButton } from "@mui/material";

export default function AssignmentDetails({ assignment,classroom }) {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, p: 2 }}>
      {/* Assignment Details Card */}
      <Card sx={{ p: 2, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display:"flex", justifyContent:"center" , alignItems:'center', p: 1, p: 1, borderRadius: '50%', bgcolor: classroom.color }}>
                <AssignmentIcon sx={{color:"white"}} />
              </Box>
              <Typography sx={{mx:1,fontFamily: "'Google Sans', sans-serif"}} variant="h5" gutterBottom color="black">
                {assignment.title}
              </Typography>
            
            </Box>
            <IconButton
   
              >
             <MoreVertIcon sx={{ color: 'gray.500' }} />
          </IconButton>

          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",my:2 }}>
            <Typography variant="subtitle1"  sx={{ fontWeight:500, color:'#3c4043', mb:2, fontFamily: "'Google Sans', sans-serif", }}>
              Points  {assignment.points}      
            </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight:500, mb:2,  color:'#3c4043', fontFamily: "'Google Sans', sans-serif", }}>
            Due {assignment.dueDate}
          </Typography>
          </Box>

          <Divider />
          <Typography  variant="body1"  sx={{  color:'#3c4043', my: 2,fontFamily: "'Google Sans', sans-serif", }}>
            {assignment.description}
          </Typography>
         
        </CardContent>
      </Card>

      {/* Submission Form */}
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Submit Your Assignment
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Your Answer" multiline rows={4} variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Submit Assignment
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );  
}
