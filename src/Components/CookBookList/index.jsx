import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// 引入样式
import { Title, Item, Dl, Dd } from "./style";

// 引入请求需要的信息
import Req from "@/http/request";
import { GOOKCOOK } from "@/config/url";
class Index extends Component {
    state = {
        list: [],
    };
    async componentDidMount() {
        try {
            let ret = await Req.get(GOOKCOOK);
            if (ret.data.code === 0) {
                this.setState(() => {
                    return {
                        list: ret.data.data,
                    };
                });
            }
        } catch (error) {}
    }
    render() {
        return (
            <>
                <Title>精品好菜</Title>
                <Item>
                    {this.state.list.map((item, index) => {
                        return (
                            <Dl
                                key={index}
                                onClick={this.goDetail.bind(this, item.id)}
                            >
                                <dt>
                                    <img src={item.img} />
                                </dt>
                                <Dd>
                                    <h3>{item.name}</h3>
                                    <p>
                                        {item.all_click}浏览&emsp;
                                        {item.favorites}
                                        收藏
                                    </p>
                                </Dd>
                            </Dl>
                        );
                    })}
                </Item>
            </>
        );
    }
    goDetail(id) {
        // 跳转到详情页面
        this.props.history.push({
            pathname: "/cb_detail/" + id,
        });
    }
}

export default withRouter(Index);
