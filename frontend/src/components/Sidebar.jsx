import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="card">
        <div className="list-group list-group-flush">
            {/* <h5 className="card-header">Dashboard</h5> */}
            <Link to='/dashboard' className="list-group-item list-list-group-item-action">Dashboard</Link>
            <Link to='/dashboard/my-courses' className="list-group-item list-list-group-item-action">My Courses</Link>
            <Link to='/dashboard/favorite-courses' className="list-group-item list-list-group-item-action">Favorite Courses</Link>
            <Link to='/dashboard/recommended-courses' className="list-group-item list-list-group-item-action">Recommended Courses</Link>
            <Link to='/dashboard/profile-settings' className="list-group-item list-list-group-item-action">Profile Settings</Link>
            <Link to='/' className="list-group-item list-list-group-item-action">Change Password</Link>
            <Link to='/' className="list-group-item list-list-group-item-action text-danger">Logout</Link>
        </div>
     </div>
  )
}

export default Sidebar