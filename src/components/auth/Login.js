import React, { useState, useContext, useEffect } from 'react';
import { Input, Button } from 'react-rainbow-components';
import styles from '../../styles/login.module.css';
import { AuthContext } from '../../contexts/contextType/authContexts';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
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
                
            <h2 style={{textAlign:'center', marginBottom:'1em'}}>Sign in</h2>

            <h3>Email:</h3>
            <Input className={styles.inputFields} value={identifier} onChange={(e)=>handleChange(e)} placeholder='Enter Username or Email' name='identifier' />
            
            <h3>Password:</h3>
            <Input className={styles.inputFields} type='password' value={password} onChange={(e)=>handleChange(e)} placeholder='Password' name='password' />

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

            <br />

            {authContext.authStatus.loginError && <Alert severity='error'>Sign Up failed! Please try again.</Alert>}
            {authContext.authStatus.loginSuccess && <Alert severity='success'>User has been registered. Head towards login page.</Alert>}
            {/* <Typography variant='body2' component='h1'>
                Don't have an account? 
                <Link href='/auth/signup'><a href=''>Sign Up</a></Link>
            </Typography> */}
        </div>
    );
}
 
export default Login;