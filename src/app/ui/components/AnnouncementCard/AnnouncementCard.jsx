import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
    Chip,
    Menu,
    MenuItem,
    Divider,
    Box
  } from '@mui/material';
  import {
    MoreVert,
    ThumbUp,
    ChatBubbleOutline,
    Share,
    Schedule
  } from '@mui/icons-material';
  import { useState } from 'react';
  
  const AnnouncementCard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const user = {
      name: 'Abuzar Ali',
      email: 'abuzarali.edu@gmail.com',
      image: 'https://avatars.githubusercontent.com/u/168404860?v=4',
    };
  
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    
    return (
      <Card sx={{ 
        boxShadow: 2,
        ml: { lg: 1, xl: 1, '2xl': 1 },    
        mb: 3, 
        borderRadius: 2, 
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        border: '1px solid rgba(0,0,0,0.12)'
      }}>
        <CardHeader
          avatar={<Avatar src={user.image} alt={user.name} sx={{ width: 40, height: 40 }} />}
          title={
            <Box>
              <Typography variant="subtitle1" fontWeight="500">{user.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {user.email} • <Schedule sx={{ fontSize: 12, verticalAlign: 'middle' }} /> {new Date().toLocaleDateString()}
              </Typography>
            </Box>
          }
          action={
            <>
              <IconButton onClick={handleMenuOpen}>
                <MoreVert />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
              </Menu>
            </>
          }
          sx={{ 
            '& .MuiCardHeader-content': { overflow: 'hidden' },
            alignItems: 'flex-start'
          }}
        />
  
        <CardContent sx={{ pt: 0, pb: 1 }}>
          <Typography variant="body1" paragraph>
            📢 Important announcement about tomorrow's class! Please complete the pre-reading 
            materials and bring your questions to the discussion.
          </Typography>
          <Chip 
            label="Class Announcement" 
            size="small" 
            sx={{ bgcolor: '#e8f0fe', color: '#1967d2' }} 
          />
        </CardContent>
  
        <Divider />
  
        <CardActions sx={{ px: 2, py: 1 }}>
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <ThumbUp fontSize="small" />
            <Typography variant="caption" sx={{ ml: 0.5 }}>12</Typography>
          </IconButton>
          
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <ChatBubbleOutline fontSize="small" />
            <Typography variant="caption" sx={{ ml: 0.5 }}>3</Typography>
          </IconButton>
          
          <Box flexGrow={1} />
          
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <Share fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    );
  };
  
  export default AnnouncementCard;
