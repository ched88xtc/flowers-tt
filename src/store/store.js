import {createStore} from "redux";
import {flowersReducer} from "./flowersReduser";


export const store = createStore(flowersReducer);
