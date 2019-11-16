# 9 个当下框架示例

了解一点，多多益善。

## 基于 React Hooks 的电影搜索

[Github 地址](https://github.com/samie820/hooks-movie-app)

+ Hooks 的一些用法。例如类 `redux` 的 `useReducer` 状态管理
+ 流行请求库 `axios`

```javascript
// 传统 class 写法
class Foo extends React.Component {
    constructor() {
        super(props);
        // 初始化
        this.state = {};
    }
    componentDidMount() {
        // 更新
        this.setState({});
    }
    render() {
        // 使用
        return <div>{this.state}</div>;
    }
}

// hooks 写法
function Foo(props) {
    // 传入一个初始值
    const [bar, setBar] = React.useState(false);

    React.useEffect(() => {
        // 更新
        setBar(true);
    }, []);

    // 直接使用
    return <div>{bar}</div>;
}
```

## Vue 全家桶聊天室

[Github 地址](https://github.com/brandiqa/vue-chatkit)

+ `vue-cli` 上手
+ `vue-router` + `vuex` 使用
+ 消息推送服务 `Pusher`

```javascript
import Vue from 'vue';

import App from './App.vue';

// 安装扩展
Vue.use(Router);
Vue.use(Vuex);

// 配置
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
```

## Angular “天气预报” 从设计到上线

[Github 地址](https://github.com/hamedbaatour/Minimus)、[在线 demo](https://minimus-weather.web.app/)

+ 基础的 UI 设计（不得不说老外审美感清奇）
+ Angular8 全面的应用与复杂、OOP 强制体验
+ 全 TypeScript + 各种各样的配置
+ 第三方服务：firebase 云存储应用、openweater 天气预报、twitter API

```json
// angular.json 配置文件
{
    "projects": {
        "helloword": {
            "sourceRoot": "src",
            "projectType": "application",
            "prefix": "app",
            "architect": {
                "serve": ...
            }
        }
    }
}
```

```javascript
// main.ts 入口文件
import '...';

@NgModule({
  // 组件声明
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  // 扩展
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), // ssr
    AppRoutingModule, // 路由
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) // pwa
  ],
  bootstrap: [AppComponent]
})
class AppModule {}

// 启用生产模式
if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  // 启动 app
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(console.trace);
});
```

> 没有对比，就没有伤害。相比 `create-react-app` 和 `@vue/cli`，angular 这个命令工具一次性生成的东西太多了，不能好好地相处了

文章出处：https://dev.to/simonholdorf/9-projects-you-can-do-to-become-a-frontend-master-in-2020-n2h
