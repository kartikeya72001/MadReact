import React from 'react';
import { Modal } from 'react-rainbow-components';
import Login from './Login';
import Register from './Register';

const AuthModal = ({ type, isOpen, handleClose }) => {
    return (  
        <div style={{maxWidth:'100vw'}}>
            <Modal isOpen={isOpen} onRequestClose={()=>handleClose(null)}>
                {type === 'login' ? <Login handleClose={handleClose} /> : <Register />}
            </Modal>
        </div>
    );
};
 
export default AuthModal;