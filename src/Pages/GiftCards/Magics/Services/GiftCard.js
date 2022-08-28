import axios from 'axios'
const VIEW_BASE_REST_API_URL = "https://nike-backend.herokuapp.com/GiftCard"

class GiftCard{

    getAllGiftCard(){
        return axios.get(VIEW_BASE_REST_API_URL+'/getAllCard')
    }

    getGiftsById(id){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+id)
    }

}

export default new GiftCard()