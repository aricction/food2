import React, {useContext, useEffect } from 'react';
import EmployeeContext from './employee/EmployeeContext';

const Employeeitem = ({ employee }) => {
   const employeeContext = useContext(EmployeeContext);

   const {deleteEmployee, updateEmployee, setCurrent, clearCurrent } = employeeContext;
    const {id, firstname, lastname, phone, email, address, postalcode, town} = employee;
    const onDelete = () => {
       deleteEmployee(id);
       clearCurrent();
    };

    return (
        <div>
          <p className='card-header'>SHIPPING DETAILS</p>
          <hr/>
            <div className=" mt-3">
      
            <div className="card-body">
            <p className="card-text">
                Name: {employee.firstname}  {employee.lastname}
             </p>
         
             <p className="card-text">
                 {employee.email}  {employee.phone}
             </p>
             <p className="card-text">
              
             </p>
             <p className="card-text">
               address:  {employee.address}
             </p>
             <p className="card-text">
               {employee.town} {employee.postalcode}
             </p>
             <p className="card-text">
              
             </p>
               <a href="#" onClick={() => setCurrent(employee)} className="btn btn-primary">edit</a>
               <a href="#" onClick={onDelete}className="btn btn-danger ml-3">delete</a>
           </div>
           </div>
        </div>
    )
}
export default Employeeitem;