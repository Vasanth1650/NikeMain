import { fetchUserData } from '../Api/AuthenticationService';
import {AUTH_REQ,AUTH_SUCCESS,AUTH_FAILURE} from './Types';


export const authenticate=()=>{
    return {
        type:AUTH_REQ
    }
}



export const authSuccess= (content)=>{
    localStorage.setItem('USER_KEY',content.token);
    return {
        type:AUTH_SUCCESS,
        payload:content
    }
}

export const authFailure=(error)=>{
    return {
        type:AUTH_FAILURE,
        payload:error
    }
}


