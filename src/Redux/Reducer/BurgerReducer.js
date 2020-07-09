import * as types from "../../Constants/ActionType";

const initialState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: { salad: 10, cheese: 20, beef: 35 },
  total: 65,
};

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_BURGER: {
      let burgerUpdate = { ...state.burger };
      if (action.number === -1 && burgerUpdate[action.name] < 1) {
        return { ...state };
      }
      burgerUpdate[action.name] += action.number;
      state.burger = burgerUpdate;
      // update total
      state.total += action.number * state.menu[action.name];
      return { ...state };
    }
    default:
      break;
  }
  return { ...state };
};
