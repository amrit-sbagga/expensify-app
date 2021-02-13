import { createStore } from 'redux';

const store = createStore((state = { count : 0 }, action) => {
    console.log('running..!!', action.type);
    switch(action.type) {
        case 'INCREMENT' :
            return {
                count : state.count + 1
            }
        case 'DECREMENT' :
            return {
                count : state.count - 1
            }
        case 'RESET' :
            return {
                count : 0
            }
        default:
            return state;
    }
});

//console.log(store.getState());

//Actions - like an object that is sent to store

//increment the count
store.dispatch({
    type : 'INCREMENT'
})
console.log(store.getState());


store.dispatch({
    type : 'DECREMENT'
})
console.log(store.getState());

// store.dispatch({
//     type : 'DECREMENT'
// })
// console.log(store.getState());


//reset the count to 0
store.dispatch({
    type : 'RESET'
})
console.log(store.getState());