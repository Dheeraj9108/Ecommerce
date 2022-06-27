import axios from "axios";
import { api } from "../urlconfig";

const axiosInstace = axios.create({
    baseURL: api,
    // headers:{
    //     'Authorization':''
    // }
});
export default axiosInstace