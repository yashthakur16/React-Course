import { useSelector } from "react-redux";

function DisplayCounter() {
  let cnt = useSelector((store) => store.counter);
  return (
    <>
      <div className="col-lg-6 mx-auto">
        {" "}
        <p className="lead mb-4">Counter Current Value is {cnt}</p>{" "}
      </div>{" "}
    </>
  );
}

export default DisplayCounter;
