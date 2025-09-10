import { createContext } from "react";
import { useReducer } from "react";

let Reducer = (state, action) => {
  let newArr = state;

  if (action.action === "NEW_ITEM") {
    newArr = [
      ...state,
      { task: action.payload.task, date: action.payload.date },
    ];
  } else if (action.action === "DEL_ITEM") {
    newArr = state.filter((obj) => obj.task !== action.payload.t);
  }

  return newArr;
};

let ToDoItemsprovider = (props) => {
  let [arr, changeArr] = useReducer(Reducer, []);

  let handleAdd = (t, d) => {
    let reduceAction = {
      action: "NEW_ITEM",
      payload: {
        task: t,
        date: d,
      },
    };

    changeArr(reduceAction);

    // changeArr((currVal) => [...currVal, { task: t, date: d }]);

    event.preventDefault();
  };

  let handleDel = (t) => {
    let DelAction = {
      action: "DEL_ITEM",
      payload: {
        t: t,
      },
    };
    changeArr(DelAction);

    // let newArr = arr.filter((obj) => obj.task !== t);
    // changeArr(newArr);
  };

  return (
    <ToDoItems.Provider value={{ arr, handleAdd, handleDel }}>
      {props.children}
    </ToDoItems.Provider>
  );
};

let ToDoItems = createContext({
  arr: [],
  handleAdd: () => handleAdd(),
  handleDel: () => handleDel(),
});

export default ToDoItems;
export { ToDoItemsprovider };
