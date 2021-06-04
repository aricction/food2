import React , { Fragment, useContext, useEffect } from 'react';
import EmployeeContext from './employee/EmployeeContext';
import EmployeeItems from './Employeeitem';

const AllEmployee = () => {
    const employeeContext = useContext(EmployeeContext);
    const { employees, getEmployee, loading } = employeeContext;
    
    if(employees.length === 0 ){
        return <h3 className='alert alert-danger'>Add address</h3>
    }
        return (
        <Fragment >
            {employees.map(employee => (
             <EmployeeItems key={employee.id} employee ={employee} />            
            ))}
        </Fragment>

        
    );
};

export default AllEmployee;