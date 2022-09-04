import axios from 'axios';
const VIEW_BASE_REST_API_URL = 'https://nike-backend.herokuapp.com/sale'

class SalePageService{

    getProducts(){
        return axios.get(VIEW_BASE_REST_API_URL+'/saleproducts');
    }

    getById(id){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+id);
    }

}

export default new SalePageService();