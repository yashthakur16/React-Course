import styles from "./Input.module.css";

function Input(props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your text"
        onKeyDown={(e) => props.handleOnChange(e)}
        onChange={(e) => props.handleOnChange(e)}
      />
      <button type="button" onClick={props.handleOnAdd}>
        Add
      </button>
    </div>
  );
}

export default Input;
