import React, {useContext, useEffect} from 'react';

import AuthContext from '../component/auth/AuthContext';

const Home2 = props => {
    const authcontext = useContext(AuthContext);
    const {isAuthenticated, loadUser} = authcontext;
    useEffect(() => {
        if(isAuthenticated){
            loadUser();
        }
        else {
            props.history.push('/login')
        }
    }, [isAuthenticated, props.history]);
    return(
        <div className="container">
           <div className="row">
               <div className="col-sm-8">
                   
               </div>
               <div className="col-sm-4">
                  
               </div>

           </div>
        </div>
    )
}

export default Home2;