function Form() {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">
            <input type="text" placeholder="Enter the task" />
          </div>
          <div class="col-md-auto">
            <input type="date" name="date" id="" />
          </div>
          <div class="col col-lg-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
