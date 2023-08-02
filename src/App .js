import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent.js";
import BodyComponent from "./components/BodyComponent.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";


const AppComponent=() => (
    <div className="app">
        <HeaderComponent/>
         <Outlet/>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppComponent/>,
        children: [
            {
                path: "/",
                element:<BodyComponent /> 
            },

            {
                path: "/about",
                element:<About/> 
            },
            {
                path: "/contact",
                element:<Contact/> 
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error />
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("yes"));

root.render(<RouterProvider router={appRouter}/> );

 