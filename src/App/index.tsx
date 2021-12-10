/**
 * author iWuzhi
 * date 2021-12-08 15:07:42
 */

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Main from './Main'

interface IProps {}

// eslint-disable-next-line arrow-body-style
const App: React.FC<IProps> = () => {
  return (
    <Routes>
      <Route
        path="/posts/:index"
        element={
          <div className="h-full flex flex-col">
            <Header />
            <div className="flex flex-row flex-grow">
              <Nav />
              <Main />
            </div>
          </div>
        }
      />
    </Routes>
  )
}

export default App
