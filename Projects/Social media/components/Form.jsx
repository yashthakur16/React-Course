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
      onSubmit={() =>
        addPost(
          titleRef.current.value,
          bodyRef.current.value,
          userIdRef.current.value
        )
      }
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
