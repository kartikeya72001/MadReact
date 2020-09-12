import React,  { createContext, useState, useEffect } from 'react';
import { registerUser, loginUser } from '../actions/authActions';
import Cookie from 'js-cookie';

export const AuthContext = createContext();

// function verifyAuthToken(authToken, jwtToken){
//     if(!jwtToken)
//         return false;

//     const verificationHash = hash(jwtToken);    
//     if(verificationHash === authToken)
//         return true;
//     else return false;
// };

function getAuthToken(){
    const jwtToken = Cookie.get('auth-jwt');
    return jwtToken;
};

const getUserDetails = () => {
    const userDetails = JSON.parse(localStorage.getItem('user-details'));
    if(userDetails)
        return userDetails;
    else return {};
};

const initState = {
    isAuthenticated: Boolean(getAuthToken()),
    isLoggingIn: false,
    loginError: false,
    logoutError: false,
    isVerifying: false,
    registerError: false,
    registerSuccess: false,
    loginSuccess: false,
    userDetails: {},
}

const AuthContextProvider = (props) => {

    const [authStatus, setAuthStatus] = useState(initState);

    const register = async (creds) => {
        setAuthStatus({...authStatus, isVerifying: true});
        const { data, status } = await registerUser(creds);
    
        if(status === 200){
            setAuthStatus(({...authStatus, registerSuccess: true, userDetails: data.user, registerError: false, jwt: data.jwt}));
            return true;
        }else if(status !== 200){
            setAuthStatus({...authStatus, registerError: data, registerSuccess: false, userDetails:{}});
            return false;
        }

        return false;
    };

    const login = async (creds) => {
        
        setAuthStatus({...authStatus, isLoggingIn: true});
        const { data, status } = await loginUser(creds);

        if(status === 200){
            setAuthStatus({...authStatus, loginSuccess: true, userDetails: data.user, loginError: false, isAuthenticated: true, jwt: data.jwt});
            Cookie.set('auth-jwt', data.jwt, {expires: 30});
            localStorage.setItem('user-details', JSON.stringify(data.user));
            return true;
        } else if(status !== 200){
            setAuthStatus({...authStatus, loginError: data, loginSuccess: false, userDetails: {}});
            return false;
        }

        return false;
    };
    
    const logout = () => {
        Cookie.remove('auth-jwt');
        localStorage.removeItem('user-details');
        setAuthStatus({...initState, isAuthenticated: false});
    };

    useEffect(()=>{
        setAuthStatus({...initState, userDetails: getUserDetails()});
    },[])

    return ( 
        <AuthContext.Provider value={{authStatus, register, login, logout}}>
            {props.children}
        </AuthContext.Provider>
    );
};
 
export default AuthContextProvider;