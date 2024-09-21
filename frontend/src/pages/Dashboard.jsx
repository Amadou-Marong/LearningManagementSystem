import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <div className="card">
                    <div className="list-group list-group-flush">
                        <h5 className="card-header">Dashboard</h5>
                        <Link to='/' className="list-group-item list-list-group-item-action">My Courses</Link>
                        <Link to='/' className="list-group-item list-list-group-item-action">Favorite Courses</Link>
                        <Link to='/' className="list-group-item list-list-group-item-action">Recommended Courses</Link>
                        <Link to='/' className="list-group-item list-list-group-item-action">Profile Settings</Link>
                        <Link to='/' className="list-group-item list-list-group-item-action">Change Password</Link>
                        <Link to='/' className="list-group-item list-list-group-item-action text-danger">Logout</Link>
                    </div>
                </div>
            </aside>
            <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">My Courses</h5>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Created By</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                <th scope="row">1</th>
                                <td>Php Development</td>
                                <td><Link to='/'>Jhon Doe</Link></td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Dashboard