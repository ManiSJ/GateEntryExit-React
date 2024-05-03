import axios from "axios";

const api_url = "http://localhost:8081";

const createGateEmployee = async (employeeName) => {
    return await axios.post(api_url + '/api/gateEmployee/create',  { name : employeeName}) 
}

const updateGateEmployee = async (employeeId, employeeName) => {
    return await axios.post(api_url + '/api/gateEmployee/update', { id : employeeId, name : employeeName}) 
}

const getGateEmployee = async (id) => {
    return await axios.get(`${api_url}/api/gateEmployee/get/${id}`) 
}

const getAllGateEmployee = async (currentPage = 0, pageSize = 1) => {
    return await axios.post(`${api_url}/api/gateEmployee/getAll`, { page : currentPage, size : pageSize}) 
}

const deleteGateEmployee = async (id) => {
    return await axios.delete(`${api_url}/api/gateEmployee/delete/${id}`) 
}

export { createGateEmployee, updateGateEmployee, getGateEmployee, getAllGateEmployee, deleteGateEmployee }