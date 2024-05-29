import { createGateEmployee } from '../../service/GateEmployeeService'
import { create_gateEmployee_Request, create_gateEmployee_Success, create_gateEmployee_Failure } from './gateEmployeeTypes'

export const createGateEmployeeRequest = () => {
    return {
        type : create_gateEmployee_Request
    }
}

export const createGateEmployeeSuccess = (name) => {
   return {
        type : create_gateEmployee_Success,
        payload : name
   } 
}

export const createGateEmployeeError = (error) => {
   return {
        type : create_gateEmployee_Failure,
        payload : error
   }  
}

export const createGateEmployeeAsync = (employeeName) => {
    return async (dispatch) => {
        console.log('createGateEmployeeAsync');
        dispatch(createGateEmployeeRequest);
        const api_url = "http://localhost:8081";
        await createGateEmployee(employeeName).then(response => {
            console.log('response', response);
            dispatch(createGateEmployeeSuccess(response.data.name));
        }).catch(error => {
            console.log('error', error);
            dispatch(createGateEmployeeError(error.message));
        });
    }
}