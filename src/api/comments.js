import axios from "axios";


/**
 * 分页获取评论
 * @param articleId 文章Id
 * @param pageNum 起始页
 * @param pageSize 每页大小
 * @returns {Promise<AxiosResponse<any>> | *}
 */
export function getComment(articleId,pageNum,pageSize){
    return axios({
        url:'/comment',
        method:'get',
        params:{
            articleId,
            pageNum,
            pageSize
        }
    })
}

/**
 * 添加评论
 * @param data 评论封装数据
 * @returns {Promise<AxiosResponse<any>> | *}
 */
export function addComment(data){
    return axios({
        url:'/comment',
        method:'post',
        data:data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
