import React, { useState, useContext } from 'react';
import { Input, Button } from 'react-rainbow-components';
import styles from '../../styles/login.module.css';
import { AuthContext } from '../../contexts/contextType/authContexts';
import { Alert } from '@material-ui/lab';

const Register = () => {
    const authContext = useContext(AuthContext);
    const [creds, setCreds] = useState({
        username: '',
        email: '',
        password: '',
    });

    const {username, password, email} = creds;

    const handleChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value});
    };

    return (
        <div className={styles.container}>
            
            <h2 className='mb-4'>Sign Up</h2>

            <Input className={styles.inputFields} value={username} onChange={(e)=>handleChange(e)} label='Username' name='username' />
            <Input className={styles.inputFields} type='email' value={email} onChange={(e)=>handleChange(e)} label='Email' name='email' />
            <Input className={styles.inputFields} type='password' value={password} onChange={(e)=>handleChange(e)} label='Password' name='password' />

            <Button className={styles.loginButton}
                onClick={()=>{
                    setCreds({username: '', password: '', email: ''});
                    authContext.register(creds);
                }} 
                variant='success' 
                isLoading={authContext.authStatus.isVerifying}
                label='Sign Up'
            />
            
            <br /><br />
            {/* <Typography variant='body2' component='h1'>
                Don't have an account? 
                <Link href='/auth/signup'><a href=''>Sign Up</a></Link>
            </Typography> */}

                    {authContext.authStatus.registerError && <Alert severity='error'>Sign Up failed! Please try again.</Alert>}
                    {authContext.authStatus.registerSuccess && <Alert severity='success'>User has been registered. Head towards login page.</Alert>}
        </div>
    );
}
 
export default Register;