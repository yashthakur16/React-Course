import Item from "./item";

function FoodItems(props) {
  return (
    <>
      <ul className="list-group">
        {props.FoodI.map((items) => (
          <Item
            key={items}
            FoodI={items}
            buy={props.boughtState === items}
            handleClick={() => props.handleClick(items)}
          ></Item>
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
