import axios from "axios";

axios.defaults.baseURL = 'http://localhost:9090'

/**
 * 根据存在的文章查询所有的文章分类信息
 * @returns {Promise<AxiosResponse<any>> | *}
 */
export function getCategory(){
    return axios({
        url:'/category',
        method:'get',
    })
}


