function Input(props) {
  return (
    <>
      <input type="text" className="input" value={props.value} readOnly />
    </>
  );
}

export default Input;
