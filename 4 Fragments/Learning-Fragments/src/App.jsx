import FoodItems from "./FoodItems";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";
import Input from "./Input";
import { useState } from "react";

function App() {
  let [arrState, setArrState] = useState([]);

  let [textState, setTextState] = useState();

  let [boughtState, setBoughtState] = useState(null);

  let handleOnChang = (e) => {
    setTextState(e.target.value);
    if (e.key === "Enter") {
      let arr2 = [...arrState, e.target.value];
      setArrState(arr2);
    }
  };

  let handleOnAdd = () => {
    let arr2 = [...arrState, textState];
    setArrState(arr2);
  };

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <Input handleOnChange={handleOnChang} handleOnAdd={handleOnAdd}></Input>
        <ErrorMessage FoodI={arrState}></ErrorMessage>
        <FoodItems
          FoodI={arrState}
          boughtState={boughtState}
          handleClick={(item) => {
            if (boughtState === item) {
              setBoughtState(null);
            } else {
              setBoughtState(item);
            }
          }}
        ></FoodItems>
      </Container>
    </>
  );
}

export default App;
