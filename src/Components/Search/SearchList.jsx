import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "@/store/actions/action_search";
import { NavBar, Icon, SearchBar } from "antd-mobile";
import Req from "@/http/request";
import { GOOKCOOK } from "@/config/url";
class SearchList extends Component {
    state = {
        list: [],
        search: {
            width: "300px",
            backgroundColor: "orange",
        },
    };
    async componentDidMount() {
        try {
            let ret = await Req.get(GOOKCOOK + "?keyword=" + this.props.search);
            if (ret.data.code === 0) {
                this.setState(() => ({ list: ret.data.data }));
            }
        } catch (error) {}
    }
    render() {
        let a = this.state.list;
        return (
            <>
                <NavBar
                    icon={<Icon type="left" />}
                    rightContent={[<Icon key="1" type="ellipsis" />]}
                    onLeftClick={this.click.bind(this)}
                    style={{ backgroundColor: "orange" }}
                >
                    <SearchBar
                        placeholder={this.props.search}
                        maxLength={8}
                        style={this.state.search}
                        onSubmit={this.enter}
                    />
                </NavBar>
                <div style={{ overflowX: "hidden", height: "700px" }}>
                    {this.state.list.map((item) => {
                        return (
                            <div
                                style={{
                                    padding: "10px",
                                    display: "flex",
                                    overflowX: "hidden",
                                }}
                                onClick={this.Handler.bind(this, item.id)}
                                key={item.id}
                            >
                                <img
                                    src={item.img}
                                    width="150px"
                                    style={{ marginRight: "10px" }}
                                    alt=""
                                />
                                <div>
                                    <h3 style={{ marginBottom: "10px" }}>
                                        {item.name}
                                    </h3>
                                    <p
                                        style={{
                                            marginBottom: "10px",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            width: "150px",
                                            color: "gray",
                                        }}
                                    >
                                        {item.burdens}
                                    </p>
                                    <p style={{ color: "gray" }}>
                                        {item.all_click}浏览&emsp;
                                        {item.favorites}收藏
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
    click() {
        this.props.history.go(-1);
    }
    enter = async (val) => {
        try {
            let ret = await Req.get(GOOKCOOK + "?keyword=" + val);
            if (ret.data.code === 0) {
                this.setState(() => ({ list: ret.data.data }));
            }
        } catch (error) {}
    };
    Handler(id) {
        this.props.history.push({
            pathname: "/cb_detail/" + id,
        });
    }
}
const mapStateToProps = (state) => {
    return {
        search: state.get("reducer_search").get("search"),
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        submithandler(val) {
            dispatch(actions.actionCreator(val));
        },
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchList)
);
