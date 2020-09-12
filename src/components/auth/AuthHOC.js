import React, { useContext, useEffect } from "react";
import { AuthContext } from '../../contexts/contextType/authContexts';
import { useHistory } from "react-router-dom";

const AuthHOC = (ChildComp) => {

    return (
        function Child(ownProps){
            const authContext = useContext(AuthContext);
            const { authStatus: { isAuthenticated } } = authContext;
            const router = useHistory();

            useEffect(()=>{
                if(!isAuthenticated) 
                    router.push('/auth/noAuth');
            },[isAuthenticated]);

            return <ChildComp {...ownProps} isAuthenticated={isAuthenticated} />
        }
    );
}
 
export default AuthHOC;