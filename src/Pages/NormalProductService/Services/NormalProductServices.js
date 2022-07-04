import axios from 'axios';
const VIEW_BASE_REST_API_URL = 'https://nike-backend.herokuapp.com/totalproducts';

class NormalProductServices{
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

    update(id,addproduct){
        return axios.put(VIEW_BASE_REST_API_URL+'/update/'+id,addproduct)
    }
}

export default new NormalProductServices();