function Task() {
  let task = "Buy Milk";
  let date = "16/11/2025";
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          <h3>{task}</h3>
        </div>
        <div className="col-md-auto">
          <h3>{date}</h3>
        </div>
        <div className="col col-lg-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
