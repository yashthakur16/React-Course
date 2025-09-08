function Task() {
  let task = "Buy Milk";
  let date = "16/11/2025";
  return (
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2">
          <h3>{task}</h3>
        </div>
        <div class="col-md-auto">
          <h3>{date}</h3>
        </div>
        <div class="col col-lg-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
