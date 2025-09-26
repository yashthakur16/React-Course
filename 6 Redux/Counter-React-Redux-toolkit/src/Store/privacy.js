import { createSlice } from "@reduxjs/toolkit";

const CounterSlice2= createSlice(
  {
    name:"privacy",
    initialState:{Privacy:false},
    reducers:
    {
      private:(state)=>
      {
        state.Privacy=!state.Privacy;
      }
    }
  }
)

export const counterAction2= CounterSlice2.actions
export default CounterSlice2
