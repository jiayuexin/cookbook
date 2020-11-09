import React, { Component } from "react";
import StyleTopNav from "@/Components/HeaderNav";
import Swiper from "@/Components/Swiper";
import Search from "@/Components/Search";
import Hotcat from "@/Components/Hotcat";
import List from "@/Components/CookBookList";
class Index extends Component {
    render() {
        return (
            <>
                {/* 顶部导航 */}
                <StyleTopNav></StyleTopNav>
                {/* 轮播图 */}
                <Swiper></Swiper>
                {/* 搜索框 */}
                <Search></Search>
                {/*  */}
                <Hotcat></Hotcat>
                {/* 精品好菜列表 */}
                <List></List>
            </>
        );
    }
}
// lunb
export default Index;
