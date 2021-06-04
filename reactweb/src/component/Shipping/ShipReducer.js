import {
    SHIP_ADD,
 UPDATE_ADD
} from './actions';

export default (state, action) => {
    switch(action.type){
    case SHIP_ADD: 
    return{
        ...state,
        shippingaddress: [ ...state.shippingaddress, action.payload]

    };
    default:
        return state;

}
}
