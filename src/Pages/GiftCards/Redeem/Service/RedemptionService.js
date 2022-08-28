import axios from 'axios'
const VIEW_BASE_URL = "https://nike-backend.herokuapp.com/recievedcards"

class RedemptionService{

    activate(gifts){
        return axios.put(VIEW_BASE_URL+'/activatecard',gifts)
    }

    getByEmail(email){
        return axios.get(VIEW_BASE_URL+'/getReceiverDetails/'+email)
    }

}

export default new RedemptionService();