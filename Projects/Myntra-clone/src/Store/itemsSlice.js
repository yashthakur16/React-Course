import { createSlice } from "@reduxjs/toolkit";


const itemsSlice=createSlice({
    name: 'item',
    initialState:{items:[]
      
    },
    reducers:{
      addInitialItems:(state,action)=>
      {
        state.items=action.payload.items;
        return state;
      }
    }
});

export const itemsAction=itemsSlice.actions;

export default itemsSlice;
