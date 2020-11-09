import React, { Component } from "react";
// 导入布局文件(底部导航)
import Layout from "@/Components/Layout";
// 引入全局样式
import GlobalStyle from "./style";
// 引入路由 组件
import { Route, Switch } from "react-router-dom";
import Detail from "@/Components/CookBookList/Detail.jsx";
import SearchList from "./Components/Search/SearchList";

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle></GlobalStyle>
                <Switch>
                    {/* <Layout></Layout> */}
                    {/* react路由默认是模糊匹配,只要匹配上前面的一部分则就认为是匹配上的,使用exact表示精确匹配,一模一样才能匹配到 */}
                    <Route path="/" exact component={Layout}></Route>
                    {/* 路由规则 */}
                    <Route path="/cb_detail/:id" component={Detail}></Route>
                    <Route path="/searchList" component={SearchList}></Route>
                    <Route path="/detail" component={Detail}></Route>
                </Switch>
            </>
        );
    }
}

export default App;
