import React, { useEffect, useState } from "react";
import { createGateEmployee, getAllGateEmployee, deleteGateEmployee } from '../../service/GateEmployeeService';
import "./GateEmployees.css"
import GateEmployeeCreateEditModal from "./GateEmployeeCreateEditModal";
import { useNavigate } from 'react-router-dom';
import { createGateEmployeeAsync } from "../../redux/gateEmployee/gateEmployeeActions";
import { connect, useDispatch, useSelector } from "react-redux";
import { createGateEmployeeAsyncThunkCompleted, createGateEmployeeAsyncThunk } from "../../redux/gateEmployee/gateEmployeeSlicer";

const GateEmployees = (props) => {

    const [data, setData] = useState({
        content: [], 
        totalPages : useState(0)
    });
    const [currentPage , setCurrentPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [gateEmployeeFormValue, setGateEmployeeFormValue] = useState({
        name : ''
    });
    const lastCreatedGateEmployeeName = useSelector(state => state.gateEmployee.lastCreatedGateEmployeeName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getGateEmployees = async (page = 0, size = 5) => {
        try{
            setCurrentPage(page);
            const response = await getAllGateEmployee(page,size);
            setData({content : response.data.content, totalPages : response.data.totalPages});
        }
        catch(error){
            console.log(error);
        }
    }

    const closeCreateModal = () => {
        setShowModal(false);
        resetForm();
    }

    const resetForm = () => {
        setGateEmployeeFormValue({ name : ''});
    }

    const nameOnchange = (event) => {
        setGateEmployeeFormValue({...gateEmployeeFormValue, [event.target.name] : event.target.value })
    }

    /* const createGateEmployee = async (event) => {
        event.preventDefault();
        await createGateEmployee(gateEmployeeFormValue.name);
        setShowModal(false);
        resetForm();
        getGateEmployees();
    } */

    const createGateEmployee = (event, name) => {
        event.preventDefault();
        //props.createGateEmployee(name);
        dispatch(createGateEmployeeAsyncThunk(name));
        dispatch(createGateEmployeeAsyncThunkCompleted("finally"));
        closeCreateModal();
        getGateEmployees();
    } 

    const editGateEmploye = (id) =>{
        navigate(`/gateEmployees/${id}`);
    }

    const deleteGateEmploye = async (id) =>{
        await deleteGateEmployee(id);
        getGateEmployees();
    }

    useEffect(() => { getGateEmployees(); }, []);

    return (
        <div className="container">
            <div className="row">                               
                <div className="col-md-6">

                    <h2>Last create gate employee name : {lastCreatedGateEmployeeName}</h2>
                    <h2>Last create gate employee name via stateToProps : {props.gateEmployeeName}</h2>
                    <button className="btn btn-primary" onClick={() => dispatch(createGateEmployeeAsync("RubyA"))}>Create employee by direct dispatch</button>

                    <div> 
                        <h2>Gate employees</h2>                        
                        <button className="float-end btn btn-primary" onClick={() => setShowModal(true)}>Create</button>
                    </div>
                   
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Actions</th>
                                <th>Name</th>
                            </tr>                         
                        </thead>
                        <tbody>
                            {data.content && data.content.map(employee => <tr key={employee.id}>
                                <td>
                                    <button className="btn btn-primary" onClick={() => editGateEmploye(employee.id)}>Edit</button>
                                    <button className="mx-2 btn btn-danger" onClick={() => deleteGateEmploye(employee.id)}>Delete</button>                                   
                                </td>
                                <td>{employee.name}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>

                    <nav className="float-end">
                        <ul className="pagination">
                            <li className="page-item" key="prev">
                                <a key="prev-a" onClick={() => getGateEmployees(currentPage - 1)} className={ 0 == currentPage ? 'page-link disabled' : 'page-link'}>&laquo;</a>
                            </li>
                            
                            {data.content && [...Array(data.totalPages).keys()].map(page => <li className="page-item" key={page}><a className={currentPage == page ? 'page-link active' : 'page-link'} key={page + '-a'} onClick={() => getGateEmployees(page)}>{page + 1}</a></li>)}
                    
                            <li className="page-item" key="next">
                                <a key="next-a" onClick={() => getGateEmployees(currentPage + 1)} className={ data.totalPages == currentPage + 1 ? 'page-link disabled' : 'page-link'}>&raquo;</a>
                            </li>
                        </ul>
                    </nav>                    

                </div>
            </div>

            {showModal && (
            <GateEmployeeCreateEditModal 
                closeCreateModal={closeCreateModal} 
                gateEmployeeFormValue={gateEmployeeFormValue}
                nameOnchange={nameOnchange}
                createGateEmployee={createGateEmployee} />)} 
        </div>
    );
}

const mapStateToProps = state => {
    return {
        gateEmployeeName : state.gateEmployee.lastCreatedGateEmployeeName
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        createGateEmployee : (name) => 
        {          
            dispatch(createGateEmployeeAsync(name));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(GateEmployees)