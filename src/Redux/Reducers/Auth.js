import {AUTH_REQ,AUTH_SUCCESS,AUTH_FAILURE} from '../Types';

const initialState={
    user:{},
    error:'',
    loading:false
};


//state change 
const auth=(state=initialState,action)=>{
    console.log("Reducer auth");
    switch(action.type){
        case AUTH_REQ:
            return {...state,error:'',loading:true};
        
        case AUTH_SUCCESS:
            const data=action.payload;
            return {...state,error:'',loading:true,user:data};

        case AUTH_FAILURE:
            const error=action.payload;
            return {...state,loading:false,error:error};


        default:
            return state;
    }
}


export default auth;