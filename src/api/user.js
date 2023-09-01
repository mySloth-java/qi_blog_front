import axios from "axios";

/**
 * 用户注册接口
 * @param account 用户账号
 * @param password 用户密码
 * @returns {Promise<axios.AxiosResponse<any>> | *}
 */
export function login(account,password){
    const data = {
        account,
        password
    }
    return axios({
        url:'/user/login',
        method:'post',
        data:data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

/**
 * 注册
 * @param account 账号
 * @param email 邮箱
 * @param password 密码
 * @returns {Promise<axios.AxiosResponse<any>> | *}
 */
export function register(account,email,password){
    const data = {
        account,
        password,
        email
    }
    return axios({
        url:'/user/register',
        method:'post',
        data:data,
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
