import ReactDOM from "react-dom/client"
// import React from "react"
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import CreateTrip from "./CreateTrip/Trip.jsx"
import Error from "./components/Custom/Error"
import Header from "./components/Custom/Header.jsx"
import Body from "./components/Custom/Body"
import Footer from "./components/Custom/Footer"
import Contact from "./components/Custom/Contact"



// eslint-disable-next-line react-refresh/only-export-components
const AppLayout = () => {
   return (
   
     <>
       <Header />
       <Outlet/>
        <Footer/>
    
     </>

   );
 };





const approuter = createBrowserRouter ([
   {
      path : '/',
      element : <AppLayout />,
      errorElement : < Error/>,
      children : [
         {
            path : '/',
            element : <Body />
      
         },
         {
            path : '/CreateTrip',
            element : <CreateTrip />
      
         },
         {
            path : '/Contact',
            element : <Contact />
      
         }
      ]
   },

  
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);

