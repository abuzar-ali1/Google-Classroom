import {
    Card,
    CardContent,

    Button,
    Avatar,
    Grid,

    IconButton,
    
  } from '@mui/material';
import MoreVertIcon from "@mui/icons-material/MoreVert";

  import { Videocam as VideocamIcon } from '@mui/icons-material';
  
  const GoogleMeetCard = () => {
    return (
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: 2,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e0e0e0',
          mb: 1
        }}
      >
    
        
        <CardContent sx={{ p: 3 }}>
 
          <Grid container alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Grid item sx={{width:"100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Avatar
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABAlBMVEX///8ArEf/ugAmhPwAZtoAgy3pQjUNsFD/zEIwvGoAsEkAp0RepP3//ff/wBcphvzr9P8ouWT/wgDrTDH+tQIAYeUAbM4AqU0AsD7nOTn/Ox8viv8Sc+TJVF3/+u3t+fJCjuQwg+H/89PT8d/3vLgAeifl9+wAeDac37iE16b/xgIAfjEFmT4Ctk74wLb/0kH/0FL/4I3/3YNUx4St5MTD69Rx0ZlKxHz/9t2j4ML/taT/RhxZwW/gxdHXSEfCS2TRXFZdlSFLm//quwc6iifJtA6mqRR+nx2YpxhvnB9MkiXYtga4rRcQnkwEjTYSbe1goOiuzvMged/U5fmYwfAvh9cTLEk8AAAC2klEQVR4nO3aeZeSUBjHca7GIFgStEyrTrmNmNVk47SvM9M6LVbv/62EiAn3kh4BfXw4v+//HO/nwHPR49U0hBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQihj9ysPKiv18KBOveakWpcuu6UVqx1Qr1qtdT0FpFR6RL1uudZOOkjpLvXK47V20kIq1EuP5TvSQkrbNPATR2rIFj1bgaMAkKmDPyR05ARpDh1zn9SRD+SxmEQh+efIBdILHMKgdOQBGYowSkd2SMecOTZ+R6KOzJBDQ1BBYo6skH0hqCBxR0bISJBBJEcmSONIkEFkRxZI0xFkEMWRGvIkfAvSQFRHWoirPZUdG4Q8u5HQ83SQF7t0kJevbqu9flPzagtLYrhvzyw6yDv7pppdrl9YWF11eO+Pu1VCyHk7qfKyy5Rb4p3oXZ0UUk7Kvrj4KuWOeKf9vs4f4rofur6DPcQf88DBHTIZc13nDwnGvACQ6Zizh8zGnDvEdT93dZ0/xPtyHHWwhXhf+zEHV4j3MTIefCGu+0l2sIRIY84WIo85W4g85lwhjTN5PLhCjKreLgZkIBIkHCFiYH1TJCwhwlIlPCHCGtxrFwISSNpFgAgxiG9efCEivnkxhviSyMhzhvib13zkWUOimxdviC+phpsXc8h882IPmW1eWwexy0sgmgQJv6/Q/j+S9EeP3Vh8lXxHws2LErJ3K6HvY8NwFqYsONi8SCHnErpydfeautQlWVa1GBB/0T3lieMJEVpHeeZ4QprySRS+EOlsEGdI7LQWa0j0/BxvSOREI3NI5Iwpd8js1C9/yPwEGnfI7Eygwx4yfTcazf99MB+I/0YZ9jqbcqwVstEKA/mRJ2TJ78q19jNHiEno0LRxfpBDUsiv3CAjUocvUe9JKkiP2OH3e+9OvPEf0zFX6mhEuWMhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQmhN/QXqrIrn5rBXOwAAAABJRU5ErkJggg"
                alt="Google Meet"
                sx={{ width: 50, height: 50 }}


              />


          <IconButton
             sx={{
            color: 'text.secondary'
              }}
            >
          <MoreVertIcon  />
        </IconButton>
  
            </Grid>

          
          </Grid>
  
        
          <Button
            variant="contained"
            fullWidth
            startIcon={<VideocamIcon />}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              py: 1,
              backgroundColor: '#1a73e8',
              '&:hover': { backgroundColor: '#1557b0' }
            }}
          >
            Join
          </Button>
  
      
        </CardContent>
      </Card>
    );
  };
  
  export default GoogleMeetCard;