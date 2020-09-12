import React, { useState, useContext, useEffect } from 'react';
import { Input, Button } from 'react-rainbow-components';
import styles from '../../styles/login.module.css';
import { AuthContext } from '../../contexts/contextType/authContexts';
import { useHistory } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ handleClose }) => {
    const router = useHistory();
    const authContext = useContext(AuthContext);
    const [creds, setCreds] = useState({
        identifier: '',
        password: '',
    });

    const { identifier, password } = creds;

    const handleChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value});
    };

    // useEffect(()=>{
    //     if(authContext.authStatus.isAuthenticated)
    //         router.push('/dashboard');
    //         handleClose(null);
    // },[authContext.authStatus.isAuthenticated]);

    return (  
        <div className={styles.container}>
            
            <h2 className='mb-4'>Sign in</h2>

            <Input className={styles.inputFields} value={identifier} onChange={(e)=>handleChange(e)} label='Email' placeholder='Enter Username or Email' name='identifier' />
            <Input className={styles.inputFields} type='password' value={password} onChange={(e)=>handleChange(e)} label='Password' placeholder='Password' name='password' />

            <Button className={styles.loginButton}
                onClick={async ()=>{
                    setCreds({identifier:'', password: ''});
                    const loginResponse = await authContext.login(creds);
                    if(loginResponse) {
                        router.push('/dashboard');
                        handleClose(null);
                    }
                }} 
                variant='success' 
                isLoading={authContext.authStatus.isLoggingIn}
                label='Sign In'
                shaded
            />
            
            <br /><br />
            {/* <Typography variant='body2' component='h1'>
                Don't have an account? 
                <Link href='/auth/signup'><a href=''>Sign Up</a></Link>
            </Typography> */}
        </div>
    );
}
 
export default Login;