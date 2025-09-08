import styles from "./item.module.css";

function Item(props) {
  return (
    <li className={`${styles.li} list-group-item ${props.buy ? `active` : ""}`}>
      {props.FoodI}
      <button onClick={() => props.handleClick()}>Buy</button>
    </li>
  );
}

export default Item;
