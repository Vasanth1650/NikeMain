import axios from 'axios'
const VIEW_BASE_REST_API_URL = "https://nike-backend.herokuapp.com/addnew"


class EmailService{

    sendNormal(){
        return axios.get(VIEW_BASE_REST_API_URL+'/getAllUser')
    }

}

export default new EmailService()