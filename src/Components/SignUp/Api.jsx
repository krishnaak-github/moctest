import axios from "axios";

export const Apidatas = axios.create({
    baseURL:'http://localhost:7000'

})