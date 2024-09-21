const Login = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h5 className="card-header">User Login</h5>
            <div className="card-body">
              <form>
                <div className="col-auto mb-3">
                  <label className="visually-hidden">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
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
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label">Remember Me</label>
                </div>
                <div className="col-auto mb-3">
                  <button type="submit" className="btn btn-primary mb-3">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
