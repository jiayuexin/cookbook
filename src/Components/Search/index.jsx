import React, { Component } from "react";
import { SearchBar } from "antd-mobile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "@/store/actions/action_search";

class Index extends Component {
    render() {
        return (
            <>
                <SearchBar
                    placeholder="想吃什么小鸡炖蘑菇"
                    maxLength={20}
                    onSubmit={this.submit}
                />
            </>
        );
    }
    submit = (val) => {
        console.log(val);
        this.props.submithandler(val);
        this.props.history.push({
            pathname: "/searchList",
        });
    };
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
