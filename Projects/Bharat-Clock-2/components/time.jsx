import { useEffect, useState } from "react";

function Time() {
  let [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("cleaning up...");
    };
  }, []);

  return (
    <>
      <h5>This is the current time- </h5>
      {time.toLocaleDateString} - {time.toLocaleTimeString()}
    </>
  );
}

export default Time;
