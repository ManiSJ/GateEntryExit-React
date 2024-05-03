import React, { useEffect, useRef, useState } from "react";
import { getAllGateEmployee } from '../../service/GateEmployeeService';

const GateEmployees = () => {

    const [data, setData] = useState({
        content: [],
        totalPages : useState(0)
    });
    const [currentPage , setCurrentPage] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const getGateEmployees = async (page = 0, size = 10) => {
        try{
            setCurrentPage(page);
            //const response = await getAllGateEmployee(page,size);
            //setData({content : response.data.content, totalPages : response.data.totalPages});
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => { getGateEmployees(); }, []);

    return (
        <>
        <div className="container">
            <div className="row">                               
                <div className="col-md-6">
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
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="mx-2 btn btn-danger">Delete</button>                                   
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
                <div className="modal" id="gateEmployee-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Gate Employees</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Hello Modal
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)} data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>)} 
        </div>
  </>
    );
}

export default GateEmployees