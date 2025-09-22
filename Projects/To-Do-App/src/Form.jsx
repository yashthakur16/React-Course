function Form() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2">
            <input type="text" placeholder="Enter the task" />
          </div>
          <div className="col-md-auto">
            <input type="date" name="date" id="" />
          </div>
          <div className="col col-lg-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
