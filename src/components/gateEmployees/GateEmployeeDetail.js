import React, { useEffect, useState }  from "react"
import { getGateEmployee, updateGateEmployee } from '../../service/GateEmployeeService';
import { useParams } from "react-router-dom";
import GateEmployeeCreateEditForm  from './GateEmployeeCreateEditForm'
import { Link } from "react-router-dom";

const GateEmployeeDetail = () => {

    const { id } = useParams(); 

    const [gateEmployeeFormValue, setGateEmployeeFormValue] = useState({
        id : '',
        name : '' 
    });

    const nameOnchange = (event) => {
        setGateEmployeeFormValue({...gateEmployeeFormValue, [event.target.name] : event.target.value })
    }

    const editGateEmployee = async (event) => {
        event.preventDefault(); 
        var response = await updateGateEmployee(gateEmployeeFormValue.id, gateEmployeeFormValue.name);
        setGateEmployeeUpdatedName(response);
    }

    const fetchGateEmployee = async (id) => {
        var response = await getGateEmployee(id);
        setGateEmployeeUpdatedName(response);
    }

    const setGateEmployeeUpdatedName = (response) => {
        setGateEmployeeFormValue(
            { 
                id : response.data.id,
                name : response.data.name 
            });
    }

    useEffect(() => { fetchGateEmployee(id); }, []);

    return (
        <div className="container">
            <div className="row mt-5">
                <Link to={'/gateEmployees'}><i class="bi bi-arrow-left"></i> Back to list </Link>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h2>Edit gate employee</h2>
                    <GateEmployeeCreateEditForm gateEmployeeFormValue={gateEmployeeFormValue} nameOnchange={nameOnchange} />
                    <button type="submit" className="float-end btn btn-primary" onClick={editGateEmployee}>Submit</button>
                </div>
            </div>        
        </div>
    )
}

export default GateEmployeeDetail