import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";

const INCREMENT = "base/INCREMENT";
const DECREMENT = "base/DECREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = Map({
  number: 0,
})

export default handleActions({
  [INCREMENT]: (state, action) => {
    const { payload: addNumber } = action;
    const number = state.get("number");
    return state.set('number', number + addNumber );
  },
  [DECREMENT]: (state, action) => {
    const { payload: subNumber } = action;
    const number = state.get("number");
    return state.set('number', number - subNumber);
  }
}, initialState)