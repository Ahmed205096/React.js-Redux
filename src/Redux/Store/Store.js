import { createStore } from "redux";
import { BanckReducer } from "../Reducers/BanckReducer";

export const store = createStore(BanckReducer);