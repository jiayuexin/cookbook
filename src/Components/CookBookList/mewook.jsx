import React, { Component } from "react";
import { Grid } from "antd-mobile";
import Request from "@/http/request";
import { LIST } from "@/config/url";
class Index extends Component {
    state = {
        list: [],
        span: {
            fontSize: "20px",
        },
        menu: {
            fontSize: "14px",
            margin: "8px",
            color: "grey",
        },
    };
    async componentDidMount() {
        let list = await Request.get(LIST);

        this.setState(() => {
            return {
                list: list.data.data,
            };
        });
    }
    render() {
        return (
            <>
                <div style={this.state.menu}>精品好菜</div>
                <Grid
                    data={this.state.list}
                    columnNum={2}
                    renderItem={(dataItem) => (
                        <div style={{ padding: "12.5px" }}>
                            <img
                                src={dataItem.img}
                                style={{ width: "100%", height: "100%" }}
                                alt=""
                            />
                            <div
                                style={{
                                    fontSize: "14px",
                                    marginTop: "12px",
                                }}
                            >
                                <span style={this.state.span}>
                                    {dataItem.name}
                                </span>
                                <div style={{ color: "#ccc" }}>
                                    <span>{dataItem.all_click}浏览</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span>{dataItem.favorites}收藏</span>
                                </div>
                            </div>
                        </div>
                    )}
                />
            </>
        );
    }
}
export default Index;
