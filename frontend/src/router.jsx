import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

import Layout from './layout/Layout.jsx';
import CourseDetail from './pages/CourseDetail.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import MyCourses from './components/user/MyCourses.jsx';
import Statistics from './components/Statistics.jsx';
import FavoriteCourses from './components/user/FavoriteCourses.jsx';
import RecommendedCourses from './components/user/RecommendedCourses.jsx';
import ProfileSettings from './components/user/ProfileSettings.jsx';
import ChangePassword from './components/user/ChangePassword.jsx';
import TeacherDashboard from './pages/TeacherDashboard.jsx';
import { createBrowserRouter } from 'react-router-dom';

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
            element: <ProfileSettings />,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: 'change-password',
            element: <ChangePassword />,
            errorElement: <div>404 Not Found</div>
          },
        ]
      },
      {
        path: 'teacher-dashboard',
        element: <TeacherDashboard />,
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
            element: <ProfileSettings />,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: 'change-password',
            element: <ChangePassword />,
            errorElement: <div>404 Not Found</div>
          },
        ]
      },
    ]
  },
])

export default router;