import React, {useReducer} from 'react';
import FeedbackReducer from './FeedbackReducer';

import feedContext from './feedbackContext';
import {SEND_FEEDBACK} from './actions';

const feedbackState = props => {
const initialState = {
      feedbacks: [],
      current: null
};

const[state, dispatch] = useReducer(FeedbackReducer, initialState );

const Sendfeedback = async feedback => {
    const config = {
        Headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/feedback', feedback, config);
        dispatch({ type: SEND_FEEDBACK, payload: feedback});
    } catch (err) {
        console.log(err);
    }
  
};

    return (
           <feedContext.Provider
          value= {
              {
                feedbacks: state.feedbacks,
                current: state.current,
                Sendfeedback

              }
          } >
                 { props.children}
           </feedContext.Provider>
    )
}

export default feedbackState;