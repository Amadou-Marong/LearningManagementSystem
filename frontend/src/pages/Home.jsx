import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
const Home = () => {
  return (
    <>
      {/* Latest Courses */}
      <div className="container mt-4">
        <h3 className="border-bottom p-1 mb-2">Latest Courses <a href="#" className="float-end">See All</a></h3>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <a href="#">
                <img src={logo} alt="course image" className="card-img-top" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <Link to="/detail/1" className="btn btn-primary">
                  Course Details
                </Link>
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
                <Link to="/detail/2" className="btn btn-primary">
                  Course Details
                </Link>
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
                <Link to="/detail/3" className="btn btn-primary">
                  Course Details
                </Link>
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
                <Link to="/detail/4" className="btn btn-primary">
                  Course Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <div className="container mt-4">
      <h3 className="border-bottom p-1 mb-2">Popular Courses <a href="#" className="float-end">See All</a></h3>
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
      
      {/* Featured Teachers */}
      <div className="container mt-4">
      <h3 className="border-bottom p-1 mb-2">Featured Teachers <a href="#" className="float-end">See All</a></h3>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <a href="#">
                <img src={logo} alt="course image" className="card-img-top" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="#" className="btn btn-primary">
                  Teacher Name
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
                    Teacher Name
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
                    Teacher Name
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
                    Teacher Name
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <div className="container mt-4">
      <h3 className="border-bottom p-1 mb-2">Student Testimonials <a href="#" className="float-end">See All</a></h3>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner bg-dark text-white py-5">
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
          <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
          <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>      
      </div>
      </>
  );
};

export default Home;
