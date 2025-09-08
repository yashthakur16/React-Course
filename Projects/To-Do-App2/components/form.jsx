import { use } from "react";
import styles from "./form.module.css";
import { useState } from "react";

function Form(props) {
  let [task, changeTask] = useState("");
  let [date, changeDate] = useState("");

  function handleOnChangeTask(value) {
    changeTask(value);
    console.log(value);
  }

  function handleOnChangeDate(value) {
    changeDate(value);
  }
  return (
    <>
      <div className={`${styles.contain}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <input
              type="text"
              placeholder="Enter the task"
              className={styles.inp}
              onChange={(e) => handleOnChangeTask(e.target.value)}
            />
          </div>
          <div className={styles.col}>
            <input
              type="date"
              className={styles.inp}
              onChange={(e) => handleOnChangeDate(e.target.value)}
            />
          </div>
          <div className={styles.col}>
            <button
              type="button"
              className={`btn btn-success`}
              onClick={() => props.handleAdd(task, date)}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
