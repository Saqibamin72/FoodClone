import React, { lazy, Suspense, useState } from "react";
import ReactDom from "react-dom";
import Header from "./src/component/Header";
import Footer from "./src/component/Footer";
import Body from "./src/component/Body";
import About from "./src/component/About";
import { RouterProvider, createBrowserRouter ,Outlet} from "react-router-dom";
import Error from "./src/component/Error";
import Contact from "./src/component/Contact";
import RestaurantMenu from "./src/component/RestaurantMenu";
import Shimmer from "./src/component/Shimmer";
import UserContext from "./src/component/utils/UserContext";
import { Provider } from "react-redux";
import store from "./src/component/redux/store";
import Cart from "./src/component/Cart";


//lazyloading instamart page
const Instamart=lazy(()=>import("./src/component/Instamart"));

const AppLayout=()=>{
   
    const[user,setUser]=useState({
        name:"Saqib Amin",
        email:"Saqibamin@gmail.com",
    });
    return(
        <Provider store={store}>
     
       
    <UserContext.Provider value=
       {{
        user: user,
        
        }}>
        <Header/>
        <Outlet/>
        <Footer/>
        </UserContext.Provider>
       
        </Provider>
    )
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body />,
            }, 
            {
                path:"/about",
                element:<About/>,
            }, 
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>,
            },
            {
                path:"/instamart",
                element:<Suspense fallback={ <Shimmer/>} >
                    <Instamart/>
                    </Suspense>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
           
        ]

    },
   
])
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)