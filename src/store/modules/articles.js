import {stat} from "@babel/core/lib/gensync-utils/fs";

/**
 * TODO 考虑将所有的axios操作以及逻辑都迁移到这里，vue只做展示
 * 文章模块数据
 */
export default {
    namespaced:true,
    state:{
        infos:[],//文章信息
        categories:[],//文章分类信息
        form:{
            title:'标题测试'
        },
        a:'文章标题'
        // form:{
        //     title:'a',//标题
        //     content:'',//文章内容
        //     summarize:'',//文章描述
        //     img:'',//文章标题图片预览
        //     classifyId:0,//分类文章Id
        //     userId:'',//用户Id
        // },//文章发布信息
    },
    actions:{

    },
    mutations:{
        //检测文章发布模块数据变化实现同步
        watchForm(state,form){
            state.form.title = form.title
            state.form.content = form.content

        },
        watchTitle(state,title){
            state.form.title = title

        },
        watchContent(state,content){
            state.form.content = content

        },

    },
    getters:{

    }

}
