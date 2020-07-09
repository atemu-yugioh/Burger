import * as types from "../Constants/ActionType";

export const handleBurger = (name, number) => {
  return {
    type: types.HANDLE_BURGER,
    name,
    number,
  };
};
