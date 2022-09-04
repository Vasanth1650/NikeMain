import axios from 'axios';
const VIEW_BASE_REST_API_URL = 'https://nike-backend.herokuapp.com/queue'

class PriorityService{

    update(product){
        return axios.put(VIEW_BASE_REST_API_URL+'/checkedin',product);
    }

}

export default new PriorityService();