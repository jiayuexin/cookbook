import React from 'react'
import ReactDOM from 'react-dom'
// 引入仓库共享数据
import { Provider } from 'react-redux'
import store  from '@/store'
// 引入router
import { BrowserRouter as Router } from 'react-router-dom'

//引入根组件
import App from './App'

// 渲染
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)