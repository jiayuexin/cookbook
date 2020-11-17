// 文件：src/components/GoodCook/Detail.jsx
// 作用：菜谱详情组件，依据动态参数id展示对应菜谱的详情信息
import React, { Component } from "react";
import Req from "@/http/request";
import { DETAIL } from "@/config/url";
import { NavBar, Icon, Popover } from "antd-mobile";

class Detail extends Component {
    state = {
        list: [],
        search: {
            width: "300px",
            backgroundColor: "orange",
        },
    };
    async componentDidMount() {
        try {
            let ret = await Req.get(DETAIL);
            this.setState(() => ({
                list: ret.data.data,
            }));
        } catch (error) {}
    }
    render() {
        let a = this.state.list;
        const Item = Popover.Item;
        const myImg = (src) => (
            <img
                src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
                className="am-icon am-icon-xs"
                alt=""
            />
        );
        return (
            <>
                <NavBar
                    icon={<Icon type="left" />}
                    rightContent={
                        <Popover
                            mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: "currentColor" }}
                            overlay={[
                                <Item
                                    key="4"
                                    value="scan"
                                    icon={myImg("tOtXhkIWzwotgGSeptou")}
                                    data-seed="logId"
                                >
                                    扫一扫
                                </Item>,
                                <Item
                                    key="5"
                                    value="special"
                                    icon={myImg("PKAgAqZWJVNwKsAJSmXd")}
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    二维码
                                </Item>,
                                <Item
                                    key="6"
                                    value="button ct"
                                    icon={myImg("uQIYTFeRrjPELImDRrPt")}
                                >
                                    <span style={{ marginRight: 5 }}>帮助</span>
                                </Item>,
                            ]}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    padding: "0 15px",
                                    marginRight: "-15px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Icon type="ellipsis" />
                            </div>
                        </Popover>
                    }
                    style={{ backgroundColor: "orange" }}
                    onLeftClick={this.click}
                >
                    {a.name}
                </NavBar>
                <div style={{ overflowX: "hidden", height: "100vh" }}>
                    <div>
                        <img src={a.img} width="100%" alt="" />
                        <h2
                            style={{
                                fontSize: "23px",
                                textAlign: "center",
                                marginTop: "20px",
                            }}
                        >
                            {a.name}
                        </h2>
                        <p
                            style={{
                                color: "gray",
                                textAlign: "center",
                                marginBottom: "20px",
                            }}
                        >
                            {a.all_click}浏览&emsp;
                            {a.favorites}收藏
                        </p>
                        <button
                            style={{
                                background: "orange",
                                width: "150px",
                                height: "50px",
                                borderRadius: "5px",
                                border: "none",
                                fontSize: "16px",
                                color: "white",
                                marginLeft: "115px",
                                marginBottom: "20px",
                            }}
                        >
                            收藏
                        </button>
                        <p
                            style={{
                                borderBottom: "13px solid #e2e2e2",
                                marginBottom: "15px",
                            }}
                        ></p>
                    </div>
                    <div style={{ padding: "10px" }}>
                        <h4 style={{ marginBottom: "10px" }}>心得</h4>
                        <p>{a.info}</p>
                    </div>
                    <div style={{ padding: "10px" }}>
                        <h4 style={{ marginBottom: "10px" }}>养生必读</h4>
                        <p>{a.health_str}</p>
                    </div>
                    <div style={{ padding: "10px" }}>
                        <h4 style={{ marginBottom: "10px" }}>用料</h4>
                        {a.burden &&
                            a.burden.map((item, index) => {
                                return (
                                    <p
                                        key={index}
                                        style={{
                                            borderTop: "1px solid #e2e2e2",
                                            padding: "10px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <span>{item.name}</span>
                                        <span
                                            style={{
                                                marginRight: "50px",
                                                color: "gray",
                                            }}
                                        >
                                            {item.content}
                                        </span>
                                    </p>
                                );
                            })}
                    </div>
                    <div style={{ padding: "10px" }}>
                        <h4 style={{ marginBottom: "10px" }}>做法</h4>
                        {a.makes &&
                            a.makes.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p
                                            style={{
                                                fontSize: "16px",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            {item.num}、{item.info}
                                        </p>
                                        <img
                                            src={item.img}
                                            style={{
                                                width: "80%",
                                                marginLeft: "20px",
                                                marginBottom: "20px",
                                            }}
                                            alt=""
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </>
        );
    }
    click = () => {
        this.props.history.go(-1);
    };
}

export default Detail;
