import {SEND_FEEDBACK} from './actions';


export default(state, action) => {
    switch(action.type){

        case SEND_FEEDBACK: 
        return{
            
        };

        default:
            return state;
    }
};