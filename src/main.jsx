import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Statistics from './components/Statistics/Statistics';
import ErrorElement from './components/ErrorElement/ErrorElement';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path: 'job-details/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`/data${params.jobId}.json`) 
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
