import React , {Fragment, useContext, useEffect, useState} from 'react';
import ShipContext from '../Shipping/ShipContext';
import Addressitem from './AddressItem';

const AllShip = () => {

    const shipContext = useContext(ShipContext);
    const {shippings, getShipping, loading} = shipContext; 

   
    return (       
  <Fragment>
     { shippings && shippings.map(shipping => (
        <Addressitem key={shipping.id} shipping ={shipping} />
     ))}
     </Fragment>
       
    );
};

export default AllShip;