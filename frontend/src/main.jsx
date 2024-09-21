import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';  // Import Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

import Layout from './layout/Layout.jsx';
import CourseDetail from './pages/CourseDetail.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import MyCourses from './components/MyCourses.jsx';
import Statistics from './components/Statistics.jsx';
import FavoriteCourses from './components/FavoriteCourses.jsx';
import RecommendedCourses from './components/RecommendedCourses.jsx';
import ProfileSettings from './components/ProfileSettings.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <div>404 Not Found</div>
      },
      {
        path: 'detail/:course_id',
        element: <CourseDetail />,
        errorElement: <div>404 Not Found</div>
      },
      {
        path: 'login',
        element: <Login />,
        errorElement: <div>404 Not Found</div>
      },
      {
        path: 'register',
        element: <Register />,
        errorElement: <div>404 Not Found</div>
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        errorElement: <div>404 Not Found</div>,
        children: [
          {
            index: true,
            element: <Statistics />,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: 'my-courses',
            element: <MyCourses />,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: 'favorite-courses',
            element: <FavoriteCourses />,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: 'recommended-courses',
            element: <RecommendedCourses />,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: 'profile-settings',
            element: <ProfileSettings/>,
            errorElement: <div>404 Not Found</div>
          },
        ]
      },
      
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
