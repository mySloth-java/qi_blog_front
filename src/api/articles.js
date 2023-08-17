import axios from "axios";

axios.defaults.baseURL = 'http://localhost:9090'

/**
 * 分页查询文章API
 * @param pageNum 文章开始页数
 * @param pageSize 文章每页显示条数
 * @returns {Promise<AxiosResponse<any>> | *}
 */
export function getArticles(pageNum,pageSize){
    return axios({
        url:'/article',
        method:'get',
        params:{
            pageNum: pageNum,
            pageSize: pageSize
        }
    })
}


export function addArticle(article){
    return axios({
        url:'/article/punish',
        method:'post',
        data:article
    })
}

