import axios from "axios";
import { api } from "../urlconfig";

const token = window.localStorage.getItem('token')

const axiosInstace = axios.create({
    baseURL: api,
    headers:{
        'Authorization':token ? `Bearer ${token}`:''
    }
});
export default axiosInstace