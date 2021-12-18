/**
 * author iWuzhi
 * date 2021-12-10 12:51:11
 */

import React from 'react'

import logo from './logo.svg'
import erin from './erin-lindford.jpeg'

interface IProps {}

// eslint-disable-next-line arrow-body-style
const Test001: React.FC<IProps> = () => {
  return (
    <section className="container p-12 bg-blue-200">
      <div className="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-lg rounded-xl">
        <div className="shrink-0">
          <img className="w-12 h-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <div
        className={[
          'max-w-sm',
          'p-8',
          'mx-auto',
          'mt-8',
          'space-y-2',
          'bg-white',
          'shadow-lg',
          'rounded-xl',
          'sm:py-4',
          'sm:flex',
          'sm:items-center',
          'sm:space-y-0',
          'sm:space-x-6',
        ].join(' ')}
      >
        <img className="block h-24 mx-auto rounded-full sm:mx-0 sm:shrink-0" src={erin} alt="Woman's Face" />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button
            type="button"
            className="px-4 py-1 text-sm font-semibold text-purple-600 border border-purple-200 rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Message
          </button>
        </div>
      </div>
    </section>
  )
}

export default Test001
