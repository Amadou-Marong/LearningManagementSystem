import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="card">
        <div className="list-group list-group-flush">
            {/* <h5 className="card-header">Dashboard</h5> */}
            <Link to='/teacher-dashboard' className="list-group-item list-list-group-item-action">Dashboard</Link>
            <Link to='/teacher-dashboard/my-courses' className="list-group-item list-list-group-item-action">My Courses</Link>
            <Link to='/teacher-dashboard/favorite-courses' className="list-group-item list-list-group-item-action">Add Course</Link>
            <Link to='/teacher-dashboard/recommended-courses' className="list-group-item list-list-group-item-action">My Users</Link>
            <Link to='/teacher-dashboard/profile-settings' className="list-group-item list-list-group-item-action">Profile Settings</Link>
            <Link to='/teacher-dashboard/change-password' className="list-group-item list-list-group-item-action">Change Password</Link>
            <Link to='/teacher-login' className="list-group-item list-list-group-item-action text-danger">Logout</Link>
        </div>
     </div>
  )
}

export default Sidebar