import { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  let dispatch = useDispatch();

  let handleAdd = (val) => {
    dispatch({
      type: "ADD",
      payload: {
        num: val.current.value,
      },
    });
  };

  let handleSub = (val) => {
    dispatch({
      type: "SUB",
      payload: {
        num: val.current.value,
      },
    });
  };

  let handlePrivacy = () => {
    dispatch({
      type: "PRIVACY",
    });
  };

  let val = useRef();
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        {" "}
        <button
          type="button"
          className="btn btn-primary btn-lg px-2 gap-3"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>{" "}
        <button
          type="button"
          className="btn btn-danger btn-lg px-2"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>{" "}
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => handlePrivacy()}
        >
          Privacy Toggle
        </button>
      </div>{" "}
      <div className="input-group input-group-lg row-input">
        <span className="input-group-text" id="inputGroup-sizing-lg"></span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          ref={val}
        />
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        {" "}
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={() => handleAdd(val)}
        >
          ADD
        </button>{" "}
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={() => handleSub(val)}
        >
          Subtract
        </button>{" "}
      </div>{" "}
    </>
  );
}

export default Controls;
