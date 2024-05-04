import React from "react"

const GateEmployeeCreateEditForm = ({gateEmployeeFormValue, nameOnchange}) => {
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" value={gateEmployeeFormValue.name} onChange={nameOnchange} className="form-control" name='name' id="name" />
            </div>
        </form>
    )
}

export default GateEmployeeCreateEditForm