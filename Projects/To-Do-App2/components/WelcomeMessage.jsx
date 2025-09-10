import { useContext } from "react";
import ToDoItems from "../src/store/to-do-items";

function Message() {
  let props = useContext(ToDoItems);
  return props.arr.length === 0 && <h2>Enjoy your Day</h2>;
}

export default Message;
