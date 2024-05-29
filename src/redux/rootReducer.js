import { combineReducers } from "redux";
import { gateEmployeeReducer } from "./gateEmployee/gateEmployeeReducer";

export const rootReducer = combineReducers(
    {
        gateEmployee : gateEmployeeReducer
    }
)