import { createSlice, current } from "@reduxjs/toolkit";

const fetchSlice=createSlice({
    name:'fetch',
    initialState:{
        fetchDone:false,
        currentlyFetching:false,

    },
    reducers:{
        markfetchDone:(state)=>
        {
            state.fetchDone=!state.fetchDone;
            return state;
        },
        markfetchingStarted:(state)=>
        {
            state.currentlyFetching=true;
            return state;
        },
        markfetchingCompleted:(state)=>
        {
            state.currentlyFetching=false;
            return state;
        }
    }
})


export const fetchActions=fetchSlice.actions;
export default fetchSlice;
