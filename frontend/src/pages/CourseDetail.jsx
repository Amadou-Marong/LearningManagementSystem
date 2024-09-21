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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
