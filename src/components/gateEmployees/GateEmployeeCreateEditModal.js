import React from "react"
import GateEmployeeCreateEditForm  from './GateEmployeeCreateEditForm'

const GateEmployeeCreateEditModal = ({closeCreateModal, createGateEmployee, gateEmployeeFormValue, nameOnchange}) => {
    return (
    <div className="modal-container d-flex align-items-center justify-content-center" id="gateEmployee-modal">
        <div className="modal-dialog">
            <div className="modal-content"> 
                <div className="modal-header">
                    <h5 className="modal-title">Create gate employee</h5>
                    <button type="button" className="btn-close" onClick={closeCreateModal}></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-6">
                            <GateEmployeeCreateEditForm 
                                gateEmployeeFormValue={gateEmployeeFormValue} 
                                nameOnchange={nameOnchange} />
                        </div>
                    </div>                                
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" onClick={createGateEmployee}>Submit</button>
                    <button type="button" className="btn btn-primary" onClick={closeCreateModal}>Close</button>
                </div>
            </div>
        </div>
    </div>)
}

export default GateEmployeeCreateEditModal