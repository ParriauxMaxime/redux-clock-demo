import './index.css'

import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {render} from 'react-dom'
import reducers from './reducers/index';

import App from './components/App'

const store = createStore(reducers)

render(
    <Provider store={store}>
        <App color={"blue"}/>
    </Provider>
    , document.querySelector('#app'))
