const ProfileSettings = () => {
  return (
    <div className="card">
      <h5 className="card-header">Profile Settings</h5>
      <div className="card-body">
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Profile Photo</label>
          <div className="col-sm-10">
            <input type="file" className="form-control" />
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
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Interests</label>
            <div className="col-sm-10">
                <textarea
                className="form-control"
                placeholder="interests"
                />
                <div id="emailHelp" className="form-text">Php, Python, Javascript, etc</div>
            </div>
        </div>
        <button className="btn btn-primary">Update</button>
      </div>
    </div>
  );
};

export default ProfileSettings;
