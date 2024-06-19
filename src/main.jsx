import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayOut from './HomeLayOut/HomeLayOut';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    children:[
      {
        path: '/',
        element: <Home />, 
    }, 
      {
        path: '/blog',
        element: <Blog />, 
    }, 
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <div className="max-w-7x mx-auto px-2 sm:px-2 lg:px-12 font-oswald bg-[#292f37] h-full text-white">
        <RouterProvider router={router} />
        </div>
  </React.StrictMode>,
)
