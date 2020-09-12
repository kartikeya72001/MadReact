import axios from 'axios';

const registerUser = async ({ email, password, username }) => {

    try{
        
        const res = await axios.post('https://mad-backend-server.herokuapp.com/auth/local/register', {
            username,
            email,
            password,
        });
 
        console.log(res);
        return res;
    
    }catch(error){
        console.log(error.response)
        return error.response;
    };
};


const loginUser = async ({identifier, password}) => {

    try{
        const res = await axios.post('https://mad-backend-server.herokuapp.com/auth/local', {
            identifier,
            password
        });
        
        console.log(res);
        return res;
    }catch(error){
        console.log(error.response);
        return error.response;
    };
};


export { registerUser, loginUser };