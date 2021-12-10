/**
 * author iWuzhi
 * date 2021-12-10 12:30:41
 */

import React from 'react'
import { useParams } from 'react-router-dom'

import allPosts from '../routes'

interface IProps {}

const Main: React.FC<IProps> = () => {
  const { index } = useParams()
  const TestComp = allPosts[index]

  return (
    <main className="flex-auto">
      <TestComp />
    </main>
  )
}

export default Main
