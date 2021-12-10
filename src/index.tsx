import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import App from './App'

import './global.css'

const HotApp = hot(App)
ReactDOM.render(
  <Router basename="/">
    <HotApp />
  </Router>,
  document.querySelector('#root')
)
