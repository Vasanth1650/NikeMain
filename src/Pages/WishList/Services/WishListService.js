import axios from "axios";
const VIEW_BASE_REST_API_URL = 'https://nike-backend.herokuapp.com/wishlist';

class WishListService{

    findByUserid(userid){
        return axios.get(VIEW_BASE_REST_API_URL+'/userid/'+userid);
    }

    deleting(id){
        return axios.delete(VIEW_BASE_REST_API_URL+'/'+id)
    }


}

export default new WishListService();