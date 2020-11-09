// 提供唯一数据源
import { fromJS} from 'immutable'
const defaultState = fromJS({
    search: ""
})

// 定义reducer
function reducer_search(state = defaultState,action) {
    // 设置
    if (action.type === 'set') {
        return state.set("search",action.payload)
    }
    // 获取
    return state
}


// 导出
export default reducer_search