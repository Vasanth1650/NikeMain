import axios from 'axios'
const VIEW_BASE_URL = "https://nike-backend.herokuapp.com/product"


class JordanService{
    getByCHart(){
        return axios.get(VIEW_BASE_URL+'/productundergender')
    }
}

export default new JordanService()