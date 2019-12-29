import {foo,bar} from './jisuan'
import '../css/test.css'
import '../css/test.less'
import '../css/test.scss'
import 'bootstrap/dist/css/bootstrap.css'

console.log("success !");
console.log(foo(4));

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