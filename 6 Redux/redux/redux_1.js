const redux = require('redux');

const reducer=(store, action)=>
{
    let s=store;
    if(action.type==='INCREMENT')
    {
        s=s+1;
    }
    else if(action.type==='DECREMENT')
    {
        s=s-1;
    }
    else if(action.type==='ADD')
    {
        s=s+action.payload.value;
    }

    return s;

}

const store=redux.createStore(reducer,  0);
const subsriber=()=>
{
    const state=store.getState();
    console.log('state updated', state);
}

const subscriber2=()=>
{
    console.log('subscriber 2');

}

store.subscribe(subsriber);
store.subscribe(subscriber2);

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'ADD', payload:{
    value:8
}});