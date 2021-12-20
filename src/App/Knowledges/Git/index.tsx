/**
 * author iWuzhi
 * date 2021-12-20 19:13:01
 */

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Init from './Init.mdx'

interface IProps {}

const Git: React.FC<IProps> = () => {
  return (
    <div className="w-full h-full p-6 m-auto overflow-y-auto prose text-white bg-black rounded-none">
      <Routes>
        <Route path="/init" element={<Init />} />
      </Routes>
    </div>
  )
}

export default Git
