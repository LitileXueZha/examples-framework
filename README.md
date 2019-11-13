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
        // 试用
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


文章出处：https://dev.to/simonholdorf/9-projects-you-can-do-to-become-a-frontend-master-in-2020-n2h
