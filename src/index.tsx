import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import App from './App'

import './global.css'

const HotApp = hot(App)
const withRouteApp = (
  <Router basename="/">
    <HotApp />
  </Router>
)

ReactDOM.render(withRouteApp, document.querySelector('#root'))
