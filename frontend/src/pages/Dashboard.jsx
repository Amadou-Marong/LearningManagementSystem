import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
// import MyCourses from "../components/MyCourses"

const Dashboard = () => {
  return (
    <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <Sidebar />
            </aside>
            <section className="col-md-9">
                {/* <MyCourses /> */}
                <Outlet />
            </section>
        </div>
    </div>
  )
}

export default Dashboard