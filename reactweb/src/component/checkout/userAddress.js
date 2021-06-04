import React from 'react';
import AllShip from './AllShip'
import AddressForm from './AddressForm';
import EmployeeForm from '../EmployeeForm';
import AllEmployees from '../AllEmployee';

const userAddress = () => {
    return (
       <div className='container'>
         <div className='row'>
         <AllShip />
         <AllEmployees/>
         </div>
         <div>
          
         </div>
       </div>
       
    )
}
 
 export default userAddress;  