const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
        <div className="container container-fluid">
            <a className="navbar-brand" href="#">Learn Online</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Courses</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Teachers</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar