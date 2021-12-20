/**
 * author iWuzhi
 * date 2021-12-20 19:15:09
 */

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Git from './Git'

interface IProps {}

const Knowledges: React.FC<IProps> = () => {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path="/git/*" element={<Git />} />
        <Route path="*" element="git:404" />
      </Routes>
    </div>
  )
}

export default Knowledges
