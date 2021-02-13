import { createStore } from 'redux';

const store = createStore((state = { count : 0 }, action) => {
    //console.log('running..!!', action.type);
    switch(action.type) {
        case 'INCREMENT' :
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count : state.count + incrementBy
            }
        case 'DECREMENT' :
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count : state.count - decrementBy
            }
        case 'RESET' :
            return {
                count : 0
            }
        case 'SET' : 
            return {
                count : action.count
            }
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log('subscribe() - ', store.getState());
});


//Actions - like an object that is sent to store

//increment the count
store.dispatch({
    type : 'INCREMENT',
    incrementBy : 5
})
//console.log(store.getState());

//unsubscribe();
store.dispatch({
    type : 'INCREMENT'
})

//reset the count to 0
store.dispatch({
    type : 'RESET'
})
//console.log(store.getState());

store.dispatch({
    type : 'DECREMENT',
    decrementBy : 10
})
//console.log(store.getState());

store.dispatch({
    type : 'DECREMENT'
})
// console.log(store.getState());

store.dispatch({
    type : 'SET',
    count : 101
})