import axios from "axios";

axios.defaults.baseURL = 'http://localhost:9090/'

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

/**
 * 发布文章API
 * @param article 文章实体
 * @returns {Promise<AxiosResponse<any>> | *}
 */
export function addArticle(article){
    return axios({
        url:'/article/punish',
        method:'post',
        data:article
    })
}

/**
 * 查询文章详情API
 * @param id 文章唯一的ID标识
 * @returns {*}
 * @constructor
 */
export function getArticleInfo(id){
    return axios({
        url:'/article/detail/'+id,
        method:'get',
        query:{
            id:id
        }
    })
}

