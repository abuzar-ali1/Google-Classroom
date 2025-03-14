"use client"
import { setLoading } from '@/redux/slices/loadingSlice';
import { Box } from '@mui/material';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';

  
const ClassroomHeader = ({ classroomId }) => {
  const pathname = usePathname();
  const activeTab = pathname.split('/').pop(); 
 
  const tabs = [
    { name: 'Stream', path: 'stream' },
    { name: 'Classwork', path: 'classwork' },
    { name: 'People', path: 'people' },
    { name: 'Grades', path: 'grades' },

  ];
  const dispatch = useDispatch()

  
 

  return (

    <Box sx={{ boxShadow: 2,pt:2, bgcolor: "white", width: "100%", borderBottom: "1px solid", borderColor: "grey.500", position: "sticky", top: 0, zIndex: 1000,  }}>
      <Box sx={{ px: 4, mx: "auto" }}>
        <Box sx={{ display: "flex", gap: { sm: 2, md: 3, lg: 4, xl: 4 } }}>
        {tabs.map((tab) => (
        <Link key={tab.path} onClick={()=>dispatch(setLoading(true))} href={`/classroom/${classroomId}/${tab.path}`}      
            style={{
              fontFamily: "sans-serif",
              padding: "0 10px 6px",
              fontWeight: 500,
              borderBottom: activeTab === tab.path ? "3px solid #1976d2" : "none",
              color: activeTab === tab.path ? "#1976d2" : "#9e9e9e",
              textDecoration: "none"
            }}
            underline="none"
          >
            {tab.name}
        
        </Link>
      ))}
        </Box>
      </Box>
    </Box>
    
    
  );
};

export default ClassroomHeader;