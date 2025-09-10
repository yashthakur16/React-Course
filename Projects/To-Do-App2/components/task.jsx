import styles from "./task.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import ToDoItems from "../src/store/to-do-items";
import { useContext } from "react";

function Task(props) {
  let pp = useContext(ToDoItems);
  let arr = pp.arr;

  return (
    <>
      {arr.map((items) => {
        return (
          <div className={styles.contain} key={items.task}>
            <div className={styles.row}>
              <div className={styles.col}>
                <p className={styles.inp}>{items.task}</p>
              </div>
              <div className={styles.col}>
                <p className={styles.inp}>{items.date}</p>
              </div>
              <div className={`${styles.col} ${styles.but}`}>
                <button
                  type="button"
                  className={`btn btn-danger`}
                  onClick={() => pp.handleDel(items.task)}
                >
                  <AiTwotoneDelete />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Task;
