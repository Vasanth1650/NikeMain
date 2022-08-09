import axios from 'axios';
const VIEW_BASE_REST_API_URL = 'https://nike-backend.herokuapp.com/product';

class DashboardService{
    getAllProducts(){
        return axios.get(VIEW_BASE_REST_API_URL+'/allproducts');
    }

    getByIds(id){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+id);
    }

    deleteByProductId(id){
        return axios.delete(VIEW_BASE_REST_API_URL+'/delete/'+id)
    }

    getByGender(gender){
        return axios.get(VIEW_BASE_REST_API_URL+'/gender/'+gender)
    }

    getByCategory1(category1){
        return axios.get(VIEW_BASE_REST_API_URL+'/productunder/'+category1)
    }
    

    update(id,addproduct){
        return axios.put(VIEW_BASE_REST_API_URL+'/update/'+id,addproduct)
    }

    getByColor(color){
        return axios.get(VIEW_BASE_REST_API_URL+'/specification/'+color)
    }

    getByTrend(trend){
        return axios.get(VIEW_BASE_REST_API_URL+'/productunderthis/'+trend)
    }
}

export default new DashboardService();