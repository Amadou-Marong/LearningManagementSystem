const ProfileSettings = () => {
  return (
    <div className="card">
      <h5 className="card-header">Profile Settings</h5>
      <div className="card-body">
        {/* <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control-plaintext"
              id="staticEmail"
              value="email@example.com"
            />
          </div>
        </div> */}
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>
        <button className="btn btn-primary">Update</button>
      </div>
    </div>
  );
};

export default ProfileSettings;
