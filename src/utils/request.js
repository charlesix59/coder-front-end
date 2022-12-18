import axios from "axios"

const request = axios.create({
    baseURL:"http://101.43.161.114:8080",
    method:"get",
    timeout:5000,
    responseEncoding:"utf-8",
})
request.interceptors.request.use(
    config=>{
        return config
    },
    error=>{
        console.log(error)
        return Promise.reject(error)
    }
)
export default request