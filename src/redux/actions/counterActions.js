import { INCREMENT, DECREMENT } from "../actionTypes";

export const increment = (number) => (dispatch) => {
  dispatch({ type: INCREMENT, payload: number });
};

export const decrement = (number) => (dispatch) => {
  dispatch({ type: DECREMENT, payload: number });
};
