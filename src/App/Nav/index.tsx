/**
 * author iWuzhi
 * date 2021-12-10 11:39:39
 */

import React from 'react'
import { Link, useParams } from 'react-router-dom'
import cx from 'classnames'

import allRoutes from '../routes'

interface IProps {}

const allIndex = Object.keys(allRoutes)

// eslint-disable-next-line arrow-body-style
const Nav: React.FC<IProps> = () => {
  const { index: activeIndex = '001' } = useParams()
  return (
    <nav className="w-16 bg-green-100">
      {allIndex.map((index) => {
        return (
          <Link
            to={`/posts/${index}`}
            key={index}
            className={cx('block', {
              'text-green-400': activeIndex === index,
            })}
          >
            {index}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
