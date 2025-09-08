function ErrorMessage(props) {
  return <>{props.FoodI.length === 0 && <h1>I am still hungry</h1>}</>;
}

export default ErrorMessage;
