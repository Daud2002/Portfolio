import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Landingpage from './Components/LandingPage/Landingpage.jsx'
import Projects from './Components/Portfolio/Projects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Landingpage />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
