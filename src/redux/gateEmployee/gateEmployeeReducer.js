import { create_gateEmployee_Request, create_gateEmployee_Success, create_gateEmployee_Failure } from './gateEmployeeTypes'

const initialGateEmployeeCreationState = {
    lastCreatedGateEmployeeName : "",
    loading : false,
    error : ''
};

export const gateEmployeeReducer = (state = initialGateEmployeeCreationState, action) => {
    switch(action.type) {
        case create_gateEmployee_Request:
            return {
                ...state,
                loading : true,
            }
        case create_gateEmployee_Success : 
            return {
                ...state,
                loading : false,
                lastCreatedGateEmployeeName : action.payload
            }
        case create_gateEmployee_Failure : 
            return {
                ...state,
                error : action.payload,
                loading : false,
            }
        default : return state
    }
}