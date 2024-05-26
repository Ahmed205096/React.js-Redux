import { DEPOSIT, WITHDRAW } from "../Constants/Constants";

export const BanckReducer = (state = 1000, action) => {
  if (action.type === DEPOSIT) return state + action.payload;
  else if (action.type === WITHDRAW) {
    if (state > 0)
        return state - action.payload;
    else return state;
}
  else return state;
};
