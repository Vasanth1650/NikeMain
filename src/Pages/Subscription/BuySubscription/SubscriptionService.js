import axios from 'axios';
const VIEW_BASE_REST_API_URL = "https://nike-backend.herokuapp.com/addnew"

class SubscriptionService{

    updateUser(id,user){
        return axios.put(VIEW_BASE_REST_API_URL+'/updateuser/'+id,user);
    }

    getUserById(id){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+id);
    }

}

export default new SubscriptionService();