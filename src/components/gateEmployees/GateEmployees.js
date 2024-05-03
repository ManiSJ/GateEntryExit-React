import React, { useEffect, useState } from "react";
import { getAllGateEmployee } from '../../service/GateEmployeeService';


const GateEmployees = () => {

    const [data, setData] = useState({
        content: [],
        totalPages : useState(0)
    });
    const [currentPage , setCurrentPage] = useState(0);

    const getGateEmployees = async (page = 0, size = 10) => {
        try{
            setCurrentPage(page);
            const response = await getAllGateEmployee(page,size);
            setData({content : response.data.content, totalPages : response.data.totalPages});
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => { getGateEmployees(); }, []);

    return (
        <div className="container">
            <div className="row">                
                <div className="col-md-6">
                    <h2>Gate employees</h2>
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
                        <ul class="pagination">
                            <li class="page-item">
                                <a onClick={() => getGateEmployees(currentPage - 1)} className={ 0 == currentPage ? 'page-link disabled' : 'page-link'}>&laquo;</a>
                            </li>
                            
                            {data.content && [...Array(data.totalPages).keys()].map(page => <li class="page-item"><a className={currentPage == page ? 'page-link active' : 'page-link'} key={page} onClick={() => getGateEmployees(page)}>{page + 1}</a></li>)}
                    
                            <li class="page-item">
                                <a onClick={() => getGateEmployees(currentPage + 1)} className={ data.totalPages == currentPage + 1 ? 'page-link disabled' : 'page-link'}>&raquo;</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    );
}

export default GateEmployees