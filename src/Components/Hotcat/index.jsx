import React, { Component } from "react";
import { Grid } from "antd-mobile";
import Request from "@/http/request";
import { HOTCAT } from "@/config/url";
class Index extends Component {
    state = {
        data: [],
        style: {
            fontSize: "14px",
            margin: "8px",
            color: "grey",
        },
    };
    async componentDidMount() {
        try {
            let ret = await Request.get(HOTCAT);
            if (ret.data.code === 0) {
                // 将数据处理成Drid需要的数据格式
                let data = [];
                ret.data.data.map((item, index) => {
                    data.push({
                        text: item.title,
                        id: item.id,
                    });
                });
                data.push({ text: "更多>>", id: 0 });
                this.setState(() => {
                    return {
                        data,
                    };
                });
            }
        } catch (error) {}
    }
    render() {
        return (
            <>
                <div style={this.state.style}>热门分类</div>
                <Grid
                    data={this.state.data}
                    square={false}
                    className="not-square-grid"
                    onClick={this.clickHandler}
                />
            </>
        );
    }
    clickHandler = (e) => {
        console.log(e);
        // 编程式导航
        // this.props.histroy.push()
    };
}

export default Index;
