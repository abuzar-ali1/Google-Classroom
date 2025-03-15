"use client"
import React from 'react'
import AppLayout from "@/appLayout/AppLayout";
import { Provider,useSelector } from "react-redux";
import { store } from "@/redux/store";
import { LinearProgress } from "@mui/material";



const RootPage = ({children}) => {
    const RoutedAppLayout = ({children}) => {
        const isLoadData = useSelector((state) => state.loading.isLoadData);
        
          return(
            <>
            {isLoadData ? (<LinearProgress  color="primary" style={{position:"fixed",top:0, left:0, width:"100%",zIndex:9999}} />):null}
                <AppLayout>
                    {children}
                </AppLayout>
            </>
          )
      }
      
  return (
    <Provider store={store}>
      <RoutedAppLayout>{children}</RoutedAppLayout>
    </Provider>
  )
}

export default RootPage