const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
function reducer(state = { totalBatteries: 0 }, action) {
 
    if (action.type === 'ADD_BATTERY') {
        return { totalBatteries: state.totalBatteries + action.payload };
    }
    return state;
}


const initialState = { totalBatteries: 0 };


const newState1 = reducer(initialState, { type: 'ADD_BATTERY', payload: 10 });
const newState2 = reducer(newState1, { type: 'ADD_BATTERY', payload: 7 });
const newState3 = reducer(newState2, { type: 'ADD_BATTERY', payload: 14 });


const totalBatteries = newState3.totalBatteries;
// Code your solution here
