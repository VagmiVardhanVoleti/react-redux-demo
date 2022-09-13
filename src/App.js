import React, { useReducer } from "react";
import CounterWithClass from "./components/CounterWithClass";

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";

// const initialState = { count: 0 };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// };

const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const increment = () => {
  //   dispatch({ type: INCREMENT });
  // };

  // const decrement = () => {
  //   dispatch({ type: DECREMENT });
  // };

  return (
    <>
      <CounterWithClass />
    </>
  );
};

export default App;
