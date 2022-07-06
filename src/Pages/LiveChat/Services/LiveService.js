import axios from 'axios';
const VIEW_BASE_REST_API_URL = "http://localhost:8080/livechat"


class LiveService{

    getAllIds(){
        return axios.get(VIEW_BASE_REST_API_URL+'/getAllId')
    }

    deletebytunnel(tunnelid){
        return axios.delete(VIEW_BASE_REST_API_URL+'/deletetunnel/'+tunnelid)
    }

}

export default new LiveService();