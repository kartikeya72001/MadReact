import React from 'react';
import { Link } from 'react-router-dom';

const NoAuth = () => {
    return (  
        <>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
            We know you want to win prizes and take part in contests. That's why we need you to make you beautiful profile.
            Head towards Login.
            <Link to='/auth/login'>Login</Link>
        </div>
        </>
    );
}
 
export default NoAuth;