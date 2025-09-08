import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../components/Heading";
import Form from "../components/form";
import Task from "../components/task";
import { useState } from "react";

function App() {
  let [arr, changeArr] = useState([]);

  let handleAdd = (t, d) => {
    let obj = {
      task: t,
      date: d,
    };
    let newArr = [...arr, obj];
    changeArr(newArr);
  };

  let handleDel = (t) => {
    let newArr = arr.filter((obj) => obj.task !== t);
    changeArr(newArr);
  };

  return (
    <>
      <Heading></Heading>
      <Form handleAdd={(t, d) => handleAdd(t, d)}></Form>
      <Task ta={arr} handleDel={(t) => handleDel(t)}></Task>
    </>
  );
}

export default App;
