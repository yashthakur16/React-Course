import { useState } from "react";
import Buttons from "./Buttons";
import Input from "./Input";

function Layout() {
  let [valueState, changeValueState] = useState("0");

  let handleOnClick = (str) => {
    if (str === "=") {
      let newStr = eval(valueState).toString();

      changeValueState(newStr);
      return;
    }

    if (str === "C") {
      changeValueState("0");
      return;
    }

    if (str === "DEL") {
      let newStr = valueState.slice(0, -1);
      changeValueState(newStr === "" ? "0" : newStr);
      return;
    }

    if (str === "+" || str === "/" || str === "-" || str === "*") {
      let newStr = valueState[valueState.length - 1];
      if (
        newStr === "+" ||
        newStr === "-" ||
        newStr === "*" ||
        newStr === "/"
      ) {
        let newOp = valueState.slice(0, -1);
        changeValueState(newOp + str);
        return;
      }
    }

    if (valueState === "0") {
      changeValueState(str.toString());
    } else {
      changeValueState(valueState + str);
    }
  };

  return (
    <>
      <div className="container">
        <Input value={valueState}></Input>
        <ul>
          <Buttons handleOnClick={(str) => handleOnClick(str)}></Buttons>
        </ul>
      </div>
    </>
  );
}

export default Layout;
