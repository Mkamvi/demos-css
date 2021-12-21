/**
 * author iWuzhi
 * date 2021-12-08 15:07:42
 */

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Home from './Home'
import Knowledges from './Knowledges'

interface IProps { }

const App: React.FC<IProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/k/*" element={<Knowledges />} />
      <Route
        path="/posts/:index"
        element={
          <div className="flex flex-col h-full">
            <Header />
            <div className="flex flex-row flex-grow">
              <Nav />
              <Main />
            </div>
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center min-h-full bg-neutral-800">
            <section>
              <h1 className="text-6xl text-red-500 text-shadow-md">404</h1>
              <p className="mt-3 text-sm text-center text-white text-shadow">疯狂加班中...</p>
            </section>
          </div>
        }
      />
    </Routes>
  )
}

export default App
