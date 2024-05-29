import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
const allRoutes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'about-us',
      element: <About />
    },
    {
      path: 'course',
      element: <Course />
    },
    {
      path: 'blog',
      element: <Blog />
    }, 
    {
      path: 'blog/:id',
      element: <BlogDetails />
    },
    {
      path: '*',
      element: <Error404 />
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} /> 
  </React.StrictMode>
);
