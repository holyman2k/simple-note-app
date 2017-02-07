import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store.js'
import Layout from './routers/Layout.jsx'
import Notes from './routers/Notes.jsx'

const history = syncHistoryWithStore(hashHistory, store)

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path='/' component={Layout} >
                    <IndexRoute component={Notes} />
                </Route>
            </Router>
        </Provider>
    )
}

export default App;