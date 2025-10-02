import { createAction, createSlice } from "@reduxjs/toolkit";


const bagItemsSlice=createSlice(
    {
        name:'bagItems',
        initialState:{bagItems:[],
            totalItem:0,
            totalMRP: 0,
            totalDiscount: 0,
            finalPayment: 0,
            clicked:[],

        },
        reducers:
        {
            add:(state,action)=>
            {
                let item=action.payload.clickedItem;
                state.bagItems.push(item);
                state.totalItem++;
                state.totalMRP+=parseInt(item.original_price);
                state.totalDiscount+=parseInt((item.original_price-item.current_price));
                state.finalPayment=parseInt((state.totalMRP-state.totalDiscount))+99;
                state.clicked.push(item.id);
                return state;
            },
            delete:(state,action)=>
            {
                let item=action.payload.item;
                state.bagItems=state.bagItems.filter((i)=>i.id!==item.id);
                state.totalItem--;
                state.totalMRP-=parseInt(item.original_price);
                state.totalDiscount-=parseInt((item.original_price-item.current_price));
                state.finalPayment=parseInt((state.totalMRP-state.totalDiscount))+99;
                state.clicked=state.clicked.filter((id)=>id!==item.id);
                return state;
            }
        }
    }
)
 


export const bagItemsActions=bagItemsSlice.actions;
export default bagItemsSlice;