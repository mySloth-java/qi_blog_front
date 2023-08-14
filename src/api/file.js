import axios from "axios";

axios.defaults.baseURL = 'http://localhost:9090'


/**
 * 图片上传接口
 * TODO 多文件上传不可序列化待解决
 * @param files 支持后续批量图片上传
 * @returns {Promise<AxiosResponse<any>> | *}
 */
export function imgUpLoad(file){
    //遍历文件
    let formData = new FormData();
    formData.append('file',file)
    // for(let file2 of file){
    //     formData.append('file',file2)
    // }

    return axios({
        url:'/file/upload',
        method:'post',
        data:formData,
    })
}
