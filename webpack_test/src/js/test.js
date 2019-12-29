import {foo,bar} from './jisuan'
import '../css/test.css'
import '../css/test.less'
import '../css/test.scss'
import 'bootstrap/dist/css/bootstrap.css'

import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'

import login from '../login.vue'

console.log("success !");
console.log(foo(4));


// var login = {
//     template:'<h1>这里是login组件，使用网页中的形式创建出来的组件</h1>'
// }




var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    // components:{
    //     login
    // }
    render: function (createElements){
        return createElements(login);
    }
})

//webpack只能识别部分ES6新语法，有的不能识别，解决方法：
//安装两套包: cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
//           cnpm i babel-preset-env babel-preset-stage-0 -D
//配置：{test:/.js$/,use:'babel-loader',exclude:/mode_modules/}
//在根目录中添加一个json文件 .babelrc
// {
//     "presets":["env","stage-0"],
//     "plugins":["transform-runtime"]
// }
class Person {
    static info = {name:"zhangsan",age:20}
}
console.log(Person.info)

//在webpack中使用vue
//在 webpack 中使用import Vue from 'vue' 导入的 Vue 构造函数，功能不完整，只提供了runtime-only 的方式，并没有提供向网页中那样的使用方式
//解决方式：1 修改node_modules vue dist package.json(main属性)
//         2 更换导入的路径
//         3 在 webpack.config.js 文件中配置 vue 被导入时的包路径


//如果要使用 runtime-only 的方式来渲染组件，则需要创建 vue 文件，webpack 无法解析，需要安装第三方loader
// cnpm i vue-loader vue-template-compiler -D (前者依赖后者)