import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice(
  {
    name:'counter',
    initialState:{counterVal:0},
    reducers:
    {
      increment:(state)=>
      {
        state.counterVal++;
      },
      decrement:(state)=>
      {
        state.counterVal--;
      },
      add:(state,action)=>
      {
        let num=parseInt( action.payload.num);
        state.counterVal=state.counterVal+num;
      },
      sub:(state,action)=>
      {
        let num=parseInt( action.payload.num);
        state.counterVal=state.counterVal-num;
      }
    }
  }
)

export const counterAction= CounterSlice.actions
export default CounterSlice;