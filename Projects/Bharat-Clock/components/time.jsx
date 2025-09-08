function Time() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  return (
    <div>
      <h5>
        This is the current time-{date} : {month + 1} : {year} - {hours} :{" "}
        {minutes} : {seconds}
      </h5>
    </div>
  );
}

export default Time;
