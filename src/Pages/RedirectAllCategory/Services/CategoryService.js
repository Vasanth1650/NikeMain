import axios from 'axios';
const VIEW_BASE_REST_API_URL = 'https://nike-backend.herokuapp.com/totalproducts';

class DashboardService{

    allProducts(){
        return axios.get(VIEW_BASE_REST_API_URL+'/allproducts')
    }

    productbyID(id){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+id);
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

    getByColor(color){
        return axios.get(VIEW_BASE_REST_API_URL+'/specification/'+color)
    }

    deleted(id){
        return axios.delete(VIEW_BASE_REST_API_URL+'/delete/'+id);
    }

    getByTrend(trend){
        return axios.get(VIEW_BASE_REST_API_URL+'/categoryunder/'+trend)
    }
}

export default new DashboardService();