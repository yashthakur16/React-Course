import styles from "./task.module.css";

function Task(props) {
  let arr = props.ta;

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
                  onClick={() => props.handleDel(items.task)}
                >
                  Delete
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
