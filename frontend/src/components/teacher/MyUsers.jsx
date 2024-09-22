import { Link } from "react-router-dom"

const MyUsers = () => {
  return (
    <div className="card">
        <h5 className="card-header">My Courses</h5>
        <div className="card-body">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Enrolled Course</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                    <th scope="row">1</th>
                    <td>Musa</td>
                    <td><Link to='/'>Python Programming</Link></td>
                    <td>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MyUsers