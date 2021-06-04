import React, {useReducer} from 'react';
import shipContext from './ShipContext';
import ShipReducer from './ShipReducer';
import uuid from 'react-uuid';
import {
    SHIP_ADD,
 UPDATE_ADD
} from './actions';

const ShipState = props => { 
    const initialState = {
        shippingaddress : [
            {   
                id:1,
                firstname: 'aric',
                lastname: 'ten',
                email: 'aric@xyz.com',
                phone: '6541214567',
                address: 'xyz',
                address2: 'abc',
                postalcode: '65412',
                town: 'kbr'
            }
        ]
        
    };
    const [state, dispatch] = useReducer(ShipReducer, initialState);

    /**actions */
    const AddShippingAddress = shipping =>{
        shipping.id = uuid();
        dispatch({
            type: SHIP_ADD,
            payload: shipping
        });
    };

    return (
        <shipContext.Provider
        value = {
            {
                shippingaddress: state.shippingaddress ,
                AddShippingAddress
            }
        }>
            { props.children}
        </shipContext.Provider>


    );
}
export default  ShipState;