import logo from '../assets/react.svg'
const Home = () => {
  return (
    <>
    {/* Latest Courses */}
    <div className="container mt-4">
        <h3 className='border-bottom p-1 mb-2'>Latest Courses</h3>
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src={logo} alt="course image" className='card-img-top'/></a>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Course Title</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src={logo} alt="course image" className='card-img-top'/></a>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Course Title</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src={logo} alt="course image" className='card-img-top'/></a>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Course Title</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src={logo} alt="course image" className='card-img-top'/></a>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Course Title</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Popular Courses */}
    <div className="container mt-4">
        <h3 className='border-bottom p-1 mb-2'>Latest Courses</h3>
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src={logo} alt="course image" className='card-img-top'/></a>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Course Title</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src={logo} alt="course image" className='card-img-top'/></a>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Course Title</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src={logo} alt="course image" className='card-img-top'/></a>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Course Title</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <a href="#"><img src={logo} alt="course image" className='card-img-top'/></a>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Course Title</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home