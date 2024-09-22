const AddCourse = () => {
  return (
    <div className="card">
      <h5 className="card-header">Add Course</h5>
      <div className="card-body">
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Course Video</label>
          <div className="col-sm-10">
            <input type="file" className="form-control" />
          </div>
        </div>
       
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Technologies</label>
            <div className="col-sm-10">
                <textarea
                className="form-control"
                placeholder="interests"
                />
                <div id="emailHelp" className="form-text">Php, Python, Javascript, etc</div>
            </div>
        </div>
        <button className="btn btn-primary">Add Course</button>
      </div>
    </div>
  )
}

export default AddCourse