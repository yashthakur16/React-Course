import styles from "./form.module.css";
import { useState, useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import ToDoItems from "../src/store/to-do-items";
import { useContext } from "react";

function Form() {
  let task2 = useRef("");
  let date2 = useRef("");

  let pp = useContext(ToDoItems);

  return (
    <>
      <div className={`${styles.contain}`}>
        <form
          className={styles.row}
          onSubmit={() => {
            pp.handleAdd(task2.current.value, date2.current.value);
            task2.current.value = "";
            date2.current.value = "";
          }}
        >
          <div className={styles.col}>
            <input
              type="text"
              placeholder="Enter the task"
              ref={task2}
              className={styles.inp}
            />
          </div>
          <div className={styles.col}>
            <input type="date" ref={date2} className={styles.inp} />
          </div>
          <div className={styles.col}>
            <button type="submit" className={`btn btn-success`}>
              <IoMdAddCircleOutline />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
