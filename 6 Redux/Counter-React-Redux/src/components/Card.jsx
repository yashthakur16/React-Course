function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">{props.children}</div>
      </div>
    </>
  );
}

export default Card;
