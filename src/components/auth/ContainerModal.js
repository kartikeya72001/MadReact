import React from 'react';
import { Modal } from 'react-rainbow-components';
import Login from './Login';
import Register from './Register';

const AuthModal = ({ type, isOpen, handleClose }) => {
    return (  
        <Modal style={{background:'linear-gradient(to bottom, #0e1111, #1F060A)', color:'white'}} isOpen={isOpen} onRequestClose={()=>handleClose(null)}>
            {type === 'login' ? <Login handleClose={handleClose} /> : <Register />}
        </Modal>
    );
};
 
export default AuthModal;