const Register = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h5 className="card-header">User Register</h5>
            <div className="card-body">
              <form>
                <div className="col-auto mb-3">
                  <label className="visually-hidden">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-auto mb-3">
                  <label className="visually-hidden">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="col-auto mb-3">
                  <label className="visually-hidden">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="Password"
                  />
                </div>
                <div className="col-auto mb-3">
                  <label className="visually-hidden">Interests</label>
                  <textarea
                    className="form-control"
                    placeholder="interests"
                  />
                  <div id="emailHelp" className="form-text">Php, Python, Javascript, etc</div>
                </div>

                <div className="col-auto mb-3">
                  <button type="submit" className="btn btn-primary mb-3">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register