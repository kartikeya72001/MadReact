import React from 'react';
import AuthHOC from '../components/auth/AuthHOC';

const Dashboard = () => {
    return (  
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
            You will be able to view this only if logged in.
        </div>
    );
}
 
export default AuthHOC(Dashboard);