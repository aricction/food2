import React, {useContext} from 'react';
import ShipContext from '../Shipping/ShipContext';

const Addressitem = ({ address }) => {
    const shipContext = useContext(ShipContext);
    const {firstname, lastname, email, phone} = address;
    return (
         <div >
         <div className=''>
         <p>FirstName: {address.firstname}</p>
         <p>LastName: {address.lastname}</p>
         <p>Email: {address.email}</p>  
         <p>Address: {address.phone}</p>         

         </div>
         </div>
    )
}
export default Addressitem;