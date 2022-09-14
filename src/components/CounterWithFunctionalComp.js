import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counterActions";

const CounterWithFunctionalComp = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
  const incrementFunc = () => {
    dispatch(increment(5));
  };

  const decrementFunc = () => {
    dispatch(decrement(5));
  };

  return (
    <>
      <div>Count Value: {count}</div>
      <button onClick={incrementFunc}>Add +5</button>
      <button onClick={decrementFunc}>Subtract -5</button>
    </>
  );
};

export default CounterWithFunctionalComp;
