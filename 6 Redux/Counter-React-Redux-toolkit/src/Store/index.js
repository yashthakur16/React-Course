import { configureStore} from "@reduxjs/toolkit";
import CounterSlice from './counter';
import CounterSlice2 from "./privacy";








const CounterStore = configureStore({reducer:
  {
    counter: CounterSlice.reducer,
    privacy: CounterSlice2.reducer
  }
});




export default CounterStore;

