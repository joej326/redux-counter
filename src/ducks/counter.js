// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment(amt) {

  return {
    type: INCREMENT,
    payload: amt
  }
}

export function decrement(amt) {

  return {
    type: DECREMENT,
    payload: amt
  }
}

var initialState = {
  counter: 0 //pro tip -- always add a value here when you make an initialState
}

export default  function reducer (state = initialState, action){  //in es6 use equals in a paramater to set a backup value if value passed in is falsey

  state = Object.assign(state, {
    lastAction: action
  })

  switch (action.type) {
    case INCREMENT:
    return Object.assign({}, state, {
      counter: state.counter + action.payload
    })
    break;
    case DECREMENT:
    return Object.assign({}, state, {
      counter: state.counter - action.payload
  })
  return state;
}
}




// export default reducer;
