/**
 * author iWuzhi
 * date 2021-12-20 19:15:09
 */

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import References from '../References'
// import Git from './Git'
import NotFound from '../NotFound'

interface IProps { }

const Knowledges: React.FC<IProps> = () => {
  return (
    <div className='min-h-full bg-black'>
      <Routes>
        <Route path="/" element={<References />} />
        {/* <Route path="/git/*" element={<Git />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Knowledges
