# 9 个当下框架示例

了解一点，多多益善。

文章出处：https://dev.to/simonholdorf/9-projects-you-can-do-to-become-a-frontend-master-in-2020-n2h

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
// pages/index.js
// Next.js 基于 `pages` 目录下的 `.js` 文件渲染路由，无需额外的路由配置
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

## Nuxt.js 构建 Vue 版博客

> Nuxt.js 很大程度上借鉴了 Next.js，约定又多了些。。。下面这个示例和 storyblok 网站强关联，看的晕头转向，建议直接啃文档好了

[Github 地址](https://github.com/storyblok/nuxtjs-multilanguage-website)、[Nuxt.js](https://nuxtjs.org/)

+ 服务端渲染 Vue 框架 Nuxt.js
+ 路由、数据 fetch、静态页面导出等等
+ 中间件、插件
+ storyblok（模块式 CMS）

```vue
<!-- pages/index.vue -->
<template>
    <main>...</main>
</template>

<script>
export default {
    head: {}, // 页面自定义 <head>
    data() {
        // 写死的数据也会被服务端渲染
        return {};
    },
    // Nuxt.js 提供服务端渲染的一个方法，这里可以数据注入
    async asyncData(ctx) {
        return await fetch();
    },
};
</script>

<style lang="scss">
    $theme: #193E23;

    @mixin hello {}
</style>
```

```javascript
// nuxt.config.js
// 框架主要依赖目录结构，这边其实基本不需要配置了
module.exports = {
    router: {
        // 路由中间件
        middleware: 'languageDetection',
    },
    // 返回 <head> 信息。也可以在单个页面中定义
    head: {
        title: 'mywebsite',
        meta: [{ charset: 'utf-8' }],
    },
    // 插件。自己写的功能模块
    plugins: ['~/plugins/components'],
    // 第三方库
    modules: [
        ['storyblok-nuxt', {}],
    ],
};
```

## Gatsby 助力站点开发

![gatsby 工作图](https://tao-1252397519.file.myqcloud.com/img-note/gatsby.jpg)

[源码地址](https://bitbucket.org/hauyeung/react-gatsby-tutorial-app)、[Gatsby](https://www.gatsbyjs.org/)、[GraphQL](https://graphql.org/)

+ 开发框架 Gatsby，众多功能的组合体
+ 查询语言 GraphQL。或许 REST API 下一代
+ 插件系统
+ 使用 `.md` 文件渲染
+ 动态路由、数据控制

```javascript
// templates/blog-list.js
import React from "react"
import { graphql, Link } from "gatsby"

const BlogList = (props) => {
    // graphql 传入的数据
    const posts = props.data.allMarkdownRemark.edges;

    return (
        <Layout>
            {posts.map(post => <Post />)}
        </Layout>
    );
};

export default BlogList;
// graphql 语法，查询数据
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`
```

```javascript
// gatsby-node.js
// 启动服务时运行的代码。动态创建页面在此
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // 查询数据
    await graphql;
    // 创建页面
    createPage({
        path: '/index',
        component: 'templates/blog-list.js',
        context: {},
    });
};
```

## Gridsome 助力站点开发

> Vue 版的 gatsby。

[Github 地址](https://github.com/lauragift21/gridsome-blog)、[Gridsome](https://gridsome.org/)

```vue
<!-- pages/Index.vue -->
<!-- pages 目录下自动被渲染成路由 -->
<template>
    <Layout>
        <PostList v:for="$page.allPost">
    </Layout>
</template>

<script>
import PostList from '~/components/PostList.vue';

export default {
    components: { PostList },
    metaInfo: {},
};
</script>

<page-query>
query {
    allPost {
        totalCount
        edges {
            node
        }
    }
}
</page-query>
```

```javascript
// gridsome.config.js
// 一些关键性配置
module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    // 文件系统。这里也可以配置路由
    use: '@gridsome/source-filesystem',
    options: {
      path: 'content/posts/**/*.md',
      typeName: 'Post',
      route: '/blog/:slug'
    },
  }],
  transformers: {
    // 转 markdown
    remark: {
      externalLinksTarget: '_blank',
      plugins: ['@gridsome/remark-prismjs']
    }
  },
}
```

## quasar 音乐播放器 app

> 相比于 ReactNative 的 `Learn once, write anywhere`，这个基于 Vue 的框架却是 `Write once, run anywhere`，开发 app 起来就像是直接开发 web 项目
>
> 再对比国内乱糟糟的小程序环境，产生的多端框架诸如 uni-app、taro 等，感觉不是一个档次的。技术的发展由此可见

[Github 地址](https://github.com/syonip/quasar-wavesurfer-audio-player)、[Quasar](https://quasar.dev/)、[Apache Cordova](https://cordova.apache.org/)

+ 跨平台框架 quasar
+ app 模式下的跨平台 cordova。应该说它是 app 开发的核心，quasar 只是基于它封装了层 vue 的用法
+ 内置 material 风格的 UI 组件
+ 服务端渲染（ssr）等其它模式

```vue
<!-- layouts/MyLayout.vue -->
<template>
    <q-layout>
        <q-header></q-header>
        <q-page-container>
            <p>My first quasar app.</p>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'MyLayout',
    methods: {
        onNavigate() {
            // 页面的跳转没有原生的体验好
            this.$router.push('/home');
        },
    },
}
</script>
```

```javascript
// quasar.conf.js
// 简单的配置往往造成的副作用就是多处约定，不过权衡下来完全可以接受
module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [],
    css: ['app.styl'],
    framework: {
      // all: true, // includes everything; for dev only!
      components: [
        'QLayout',
        'QHeader',
        'QPageContainer',
      ],
    },
    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {}
    },
    devServer: {
      https: true,
      // port: 8080,
      open: true
    },
    // quasar 极简化了 cordova 的配置，因此一些高级用法还得官网找，例如原生 api 的使用
    cordova: {
      // id: 'org.cordova.quasar.app',
    },
  },
};
```

## 截至时间 2019.11.28

以上只是前端茫茫大海中的一粟，未来的滚轮推动着我们学习，共勉之。
