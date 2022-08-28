import axios from "axios";
const VIEW_BASE_URL = "https://nike-backend.herokuapp.com/addnew"

class VerifyAccountService{

    verify(details){
        return axios.put(VIEW_BASE_URL+'/verify',details)
    }

}

export default new VerifyAccountService()