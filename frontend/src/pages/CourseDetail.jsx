import logo from "../assets/react.svg";
import { useParams } from "react-router-dom";
const CourseDetail = () => {
  let { course_id } = useParams();
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-4">
          <img
            src={logo}
            className="img-fluid rounded-start"
            alt="..."
            width={200}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title {course_id}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
            <p className="card-text">
              <strong className="text-body-secondary">
                Course by : <a href="">Teacher 1</a>
              </strong>
            </p>
            <p className="card-text">
              <strong className="text-body-secondary">
                Duration : 3 Hours 30 Minutes
              </strong>
            </p>
            <p className="card-text">
              <strong className="text-body-secondary">
                Total Enrolled : 500 Students
              </strong>
            </p>
            <p className="card-text">
              <strong className="text-body-secondary">
                Rating : 4.5/5
              </strong>
            </p>
          </div>
        </div>
        {/* Course Videos */}

        <div className="card mt-4">
            <div className="card-header">
                Course Videos
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Introduction 
                    <span className="float-end">
                        <span className="mx-4">1 Hour 30 Minutes</span>
                        <button className="btn btn-primary "><i className="bi bi-caret-right"></i></button>
                    </span>
                </li>
                <li className="list-group-item">Setup Project 
                    <span className="float-end">
                        <span className="mx-4">1 Hour 30 Minutes</span>
                        <button className="btn btn-primary "><i className="bi bi-caret-right"></i></button>
                    </span>
                </li>
                <li className="list-group-item">Start with Functional Component 
                    <span className="float-end">
                        <span className="mx-4">1 Hour 30 Minutes</span>
                        <button className="btn btn-primary "><i className="bi bi-caret-right"></i></button>
                    </span>
                </li>
            </ul>
        </div>

        {/* Related Courses */}
        <div className="container mt-4">
        <h3 className="border-bottom p-1 mb-2">Related Courses</h3>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <a href="#">
                <img src={logo} alt="course image" className="card-img-top" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="#" className="btn btn-primary">
                  Course Title
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <a href="#">
                <img src={logo} alt="course image" className="card-img-top" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="#" className="btn btn-primary">
                  Course Title
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CourseDetail;
