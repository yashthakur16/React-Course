import { useContext } from "react";
import { useRef } from "react";
import { PostData } from "../store/post-data";

function Form() {
  let titleRef = useRef();
  let bodyRef = useRef();
  let userIdRef = useRef();

  let addPost = useContext(PostData).addPost;

  return (
    <form
      className="row g-3"
      onSubmit={() => {
        fetch("https://dummyjson.com/posts/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "I am in love with someone.",
            userId: 5,
          }),
        })
          .then((res) => res.json())
          .then((data) => addPost(data));
      }}
    >
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          ref={titleRef}
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          body
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Chilling"
          ref={bodyRef}
        />
      </div>

      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">
          User-id
        </label>
        <input
          type="text"
          className="form-control"
          id="inputZip"
          ref={userIdRef}
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
