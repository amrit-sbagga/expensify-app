import { createStore } from 'redux';

// const add = ({a, b}, c) => {
//     return a + b + c;
// }
// console.log(add({a:1, b:2}, 100));

// Action generators - functions that return action object 
const incrementCount = (payload = {}) => ({
    type : 'INCREMENT',
    incrementBy : typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
    //decrementBy : typeof decrementBy === 'number' ? payload.decrementBy : 1
})

const resetCount = ({count = 0} = {}) => ({
    type : 'RESET',
    count
})


const setCount = ({count = 115}) => ({
    type : 'SET',
    count
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change tate or action

const countReducer = (state = { count : 0 }, action) => {
        //console.log('running..!!', action.type);
        switch(action.type) {
            case 'INCREMENT' :
                return {
                    count : state.count + action.incrementBy
                }
            case 'DECREMENT' :
                //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
                return {
                    count : state.count - action.decrementBy
                }
            case 'RESET' :
                return {
                    count : action.count
                }
            case 'SET' : 
                return {
                    count : action.count
                }
            default:
                return state;
        }
    };

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log('subscribe() - ', store.getState());
});


//Actions - like an object that is sent to store

//increment the count
// store.dispatch({
//     type : 'INCREMENT',
//     incrementBy : 5
// })
//console.log(store.getState());

store.dispatch(incrementCount({incrementBy : 5}))

//unsubscribe();
store.dispatch(incrementCount())

// //reset the count to 0
// store.dispatch({
//     type : 'RESET'
// })
store.dispatch(resetCount())
//console.log(store.getState());

// store.dispatch({
//     type : 'DECREMENT',
//     decrementBy : 10
// })
store.dispatch(decrementCount({decrementBy : 10}))
//console.log(store.getState());

// store.dispatch({
//     type : 'DECREMENT'
// })
store.dispatch(decrementCount())
// console.log(store.getState());

// store.dispatch({
//     type : 'SET',
//     count : 101
// })

store.dispatch(setCount({count : 106}))