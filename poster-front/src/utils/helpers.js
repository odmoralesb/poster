import axios from 'axios'


import { API_URL } from '../actions/index'



export function createAxiosInstance(config) {

    let minConfig = {
        baseURL: API_URL
    }
    
    if (config) {
        minConfig = { ...minConfig, ...config }        

    }


    return axios.create(minConfig)
}