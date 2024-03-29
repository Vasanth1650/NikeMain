import axios from 'axios';
const VIEW_BASE_REST_API_URL = 'https://nike-backend.herokuapp.com/totalproducts';

class TotService{

    allProducts(){
        return axios.get(VIEW_BASE_REST_API_URL+'/allproducts')
    }

    productbyID(id){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+id);
    }

    getByColor(color){
        return axios.get(VIEW_BASE_REST_API_URL+'/specification/'+color)
    }

    findByCategory(option){
        return axios.get(VIEW_BASE_REST_API_URL+'/category/'+option);
    }

    findByGender(option){
        return axios.get(VIEW_BASE_REST_API_URL+'/gender/'+option);
    }

    findByCollection(option){
        return axios.get(VIEW_BASE_REST_API_URL+'/collection/'+option);
    }
}

export default new TotService();