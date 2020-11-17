import React, { Component } from "react";

import { CateListContainer } from "@/views/Category/style";
import Req from "@/http/request";
import { CATEGORY } from "@/config/url";
class Cate2 extends Component {
    // 初始化状态
    state = {
        // 左侧分类的列表数据
        cateList: [],
        // 右侧的列表数据
        cateInfoList: [],
        // 标记那个左侧分类被选中(贾active样式)
        activeList: [],
    };
    async componentDidMount() {
        try {
            let ret = await Req.get(CATEGORY);
            if (ret.data.code === 0) {
                //获取全部的数据
                let obj = ret.data.data.material;
                // Object.entries(obj)   返回一个数据,数组第一个元素是obj的key,数组的第2个元素是obj的value          Object.keys  是只取字段的key值
                let tmp = Object.entries(obj);
                let cateInfoList = tmp[0][1];
                let activeList = new Array(tmp.length).fill("");
                // 默认展示第一个
                activeList[0] = "active";
                // 修改状态
                this.setState(() => {
                    return {
                        cateList: tmp,
                        cateInfoList,
                        activeList,
                    };
                });
            }
        } catch (error) {}
    }
    clickHandler(index) {
        let activeList = new Array(this.state.cateList.length).fill("");
        // 给制定的索引位置加上选中样式
        activeList[index] = "active";
        // 右侧的数据
        let cateInfoList = this.state.cateList[index][1];
        // 修改状态
        this.setState(() => {
            return {
                activeList,
                cateInfoList,
            };
        });
    }
    render() {
        return (
            <>
                <CateListContainer>
                    {/* 左侧的div */}
                    <div>
                        <ul>
                            {this.state.cateList.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={this.state.activeList[index]}
                                        onClick={this.clickHandler.bind(
                                            this,
                                            index
                                        )}
                                    >
                                        {item[0]}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* 右侧的div */}
                    <div>
                        <ul>
                            {this.state.cateInfoList.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </CateListContainer>
            </>
        );
    }
}
export default Cate2;
