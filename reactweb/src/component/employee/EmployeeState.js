import React, {useReducer} from 'react';
import uuid from 'react-uuid';
import EmployeeContext from './EmployeeContext';
import EmployeeReducer from './EmployeeReducer';
import axios from 'axios';
import {
    ADD_EMP,
    DELETE_EMP,
    UPDATE_EMP,
    SET_CURRENT_EMP,
    CLEAR_FILTER_EMP,
    FILTER_EMP,
    SET_ALERT,
    CLEAR_ALERT,
    GET_EMP
} from './actions';


const EmployeeState = props =>{
    const initialState = {
        employees : [],
        current: null
    };
    const [state, dispatch] = useReducer(EmployeeReducer, initialState);
    /** add all action here */

    /** get all emp */
 
 /** add employee */

    const AddEmployee = async employee => {
        const config = {
            Headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/ShipAdd', employee, config);
            dispatch({ type: ADD_EMP, payload: employee });

        } catch (err) {
           console.log(err);   
        }
       
   
    };

    /** delete action */
    const deleteEmployee = id => {
        dispatch({ type: DELETE_EMP,
        payload: id 
    });
    };

    const setCurrent = employee => {
        dispatch({ type: SET_CURRENT_EMP,
        payload: employee })
    };

    const clearCurrent = () => {
        dispatch({ type: CLEAR_FILTER_EMP});
    };

    const updateEmployee =  employee => {
        dispatch({ type: UPDATE_EMP , payload: employee });
              
    };

    return (
        <EmployeeContext.Provider
            value = {
                {
                    employees: state.employees,
                    current: state.current,
                    AddEmployee,
                    deleteEmployee,
                    setCurrent,
                    clearCurrent,
                    updateEmployee
                    
                }
            }>
                { props.children}
        </EmployeeContext.Provider>

    );
}
export default EmployeeState;
