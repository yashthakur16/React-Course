function Buttons(props) {
  let arr = ["C", 1, 2, "+", 3, 4, "-", 5, 6, "*", 7, 8, "/", 9, 0, "=", "DEL"];

  return (
    <>
      {arr.map((items) => (
        <li key={items}>
          <input
            type="button"
            value={items}
            onClick={() => props.handleOnClick(items)}
          />
        </li>
      ))}
    </>
  );
}

export default Buttons;
