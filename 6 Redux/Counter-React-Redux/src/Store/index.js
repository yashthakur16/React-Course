import { createStore } from "redux";

const reducer = (state = { counter: 1, privacy:false }, action) => {
  let newState = state.counter;
  let p=state.privacy;

  if (action.type === "INCREMENT") {
    newState = newState + 1;
  }

  if (action.type === "DECREMENT") {
    newState = newState - 1;
  }

  if (action.type==="ADD")
  {
    let num=parseInt(action.payload.num);
    newState=newState+num
  }

  if(action.type==="SUB")
  {
    let num=parseInt(action.payload.num)
    newState=newState-num;
  }

  if(action.type==="PRIVACY")
  {
    p=!p;
  }

    return { counter: newState,
    privacy: p
   };
};

const CounterStore = createStore(reducer);

export default CounterStore;
