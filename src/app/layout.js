
"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppLayout from "@/appLayout/AppLayout";
import { Provider,useSelector } from "react-redux";
import { store } from "@/redux/store";
import { LinearProgress } from "@mui/material";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




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



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Google Classroom</title>
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Provider store={store}>
      <RoutedAppLayout>{children}</RoutedAppLayout>
      </Provider>
      </body>
    </html>
  );
}
