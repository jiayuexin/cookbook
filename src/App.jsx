import React, { Component } from "react";
// 导入布局文件(底部导航)
import Layout from "@/Components/Layout";
// 引入全局样式
import GlobalStyle from "./style";
class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle></GlobalStyle>
                <Layout></Layout>
            </>
        );
    }
}

export default App;
