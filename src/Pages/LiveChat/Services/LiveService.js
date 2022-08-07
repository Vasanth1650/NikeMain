import axios from 'axios';
const VIEW_BASE_REST_API_URL = "https://nike-backend.herokuapp.com/livechat"


class LiveService{

    getAllIds(){
        return axios.get(VIEW_BASE_REST_API_URL+'/getAllId')
    }

    deletebytunnel(room){
        return axios.delete(VIEW_BASE_REST_API_URL+'/deletetunnel/'+room)
    }

}

export default new LiveService();