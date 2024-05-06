import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import "./output.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import EventPage from './Pages/EventPage.jsx'
import ProjectsPage from './Pages/ProjectsPage.jsx'
import SnapShortsPage from './Pages/SnapShortsPage.jsx'
import TeamPage from './Pages/TeamPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/contact",
        element: <ContactPage/>
      },
      {
        path: "/events",
        element: <EventPage/>
      },
      {
        path: "/projects",
        element: <ProjectsPage/>
      },
      {
        path: "/snapshorts",
        element: <SnapShortsPage/>
      },
      {
        path: "/team",
        element: <TeamPage/>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
