"use client";

import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TopicIcon from '@mui/icons-material/Topic';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';


  
const AppLayout = ({children}) => {

 
  const NAVIGATION = [
    {
      segment: "home",
      title: "Home",
      icon: <HomeIcon />,
      href: "/home",
    },
    {
      segment: "calendar",
      title: "Calendar",
      icon: <CalendarTodayIcon />,
      href: "/calendar",
    },
    {
      kind: 'divider',
    },
    {
      segment: 'teaching',
      title: 'Teaching',
      icon: <GroupIcon />,
    
      children: [
        {
          segment: 'review',
          title: 'Review',
          icon: <TopicIcon />,
          href: '/teaching/review'
         
        },
      ],
    },
    {
      segment: "archivedclasses",
      title: "Archived Classes",
      icon: <DriveFolderUploadIcon />,
     href: '/archivedclasses'
    },
    {
      segment: "settings",
      title: "Settings",
      icon: <SettingsIcon />,
     href: '/settings'
    },
  ];

 
  const [session, setSession] = React.useState({
    user: {
      name: 'Abuzar Ali',
      email: 'abuzarali.edu@gmail.com',
      image: 'https://avatars.githubusercontent.com/u/168404860?v=4',
      
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Abuzar Ali',
            email: 'abuzarali.edu@gmail.com',
            image: 'https://avatars.githubusercontent.com/u/168404860?v=4',

           
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const demoTheme = createTheme({
    
  
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });


  return (
    <AppProvider

    navigation={NAVIGATION}
    session={session}
    theme={demoTheme}    
    authentication={authentication}
    branding={{
        logo: <img src="https://www.gstatic.com/classroom/logo_square_rounded.svg" alt="Google Classroom logo" />,
        title: "Classroom",
        homeUrl: "/home",
      }}
    
      
    >
      <DashboardLayout> 
    

      {children}
       
      </DashboardLayout>
    </AppProvider>
  );
};

export default AppLayout;
