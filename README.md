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

## Svelte 版 Todo 示例

> 首先了解下 `Svelte`，推荐官方[入门教程](https://svelte.dev/tutorial)（交互式学习非常赞）

[Github 地址](https://github.com/seeschweiler/svelte-todo-app)、[Svelte](https://svelte.dev/)

+ 类 vue 式框架 svelte3。编译式框架，运行时无 svelte 更苗条
+ 自定义模板语法。我晕~
+ 脚手架 rollup.js

```javascript
// main.js 入口文件
import App from './App.svelte';

const app = new App({
    target: document.getElementById('app'),
    props: {},
});

export default app;
```

```svelte
<!-- App.svelte -->
<script>
    import TodoItem from './TodoItem.svelte';

    let todos = [...];

    // 响应式渲染
    $: length = todos.length;
</script>

<style></style>

<!-- 自定义语法 -->
{#each todos as todo (todo.id)}
    <div class="todo-item">
        <TodoItem {...todo} on:deleteTodo={handleDeleteTodo} />
    </div>
{/each}
<p>总计：{length}条</p>
```

## Next.js 构建 React 版小淘宝

> Next.js 由 <zeit.co> 开发（一个静态网站部署应用，崇尚的是零配置，部署甚至只需一个命令 `now`）

[Github 地址](https://github.com/snipcart/snipcart-nextjs)、[Next.js](https://nextjs.org/)、[Next.js 入门](https://segmentfault.com/a/1190000018888296)

+ 服务端渲染 React 框架 Next.js
+ 页面配置 & 样式加载
+ 数据 fetch、导出静态网站
+ 动态路由 & 代码分割

```javascript
// ./pages/index.js
// Next.js 基础 `pages` 目录下的 `.js` 文件渲染路由，无需额外的路由配置
import React from 'react';
import Head from 'next/head'; // 渲染 head 的 next.js 组件。例如引入第三方 script

import './index.scss';

const Index = (props) => {
    React.useEffect(() => {
        // 这里获取数据不会在服务端渲染
        fetch();
    }, []);

    return (
        <Head>
            <title>hello</title>
            <meta name="viewport" />
            <script src="..." />
        </Head>
        <header>Component</header>
        <main>...</main>
        <footer>copyright</footer>
    );
};

// Next.js 提供的服务端渲染的一个方法，这里可以数据注入
Index.getInitialProps = async () => {
    return await fetch();
};

export default Index;
```

```javascript
// next.config.js
// 配置非常简单。一般只是引入第三方插件
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

// 加入 ts、sass 支持
module.exports = withTypescript(withSass());
```

文章出处：https://dev.to/simonholdorf/9-projects-you-can-do-to-become-a-frontend-master-in-2020-n2h
