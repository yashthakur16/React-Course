import {configureStore} from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import bagItemsSlice from './bagItemsSlice';
import fetchSlice from './Fetch';





const store=configureStore({
    reducer:{
        items:itemsSlice.reducer,
        bagItems:bagItemsSlice.reducer,
        fetch:fetchSlice.reducer
    }
})

export default store;