/**
 * author iWuzhi
 * date 2021-12-18 20:54:45
 */

import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {}
const WEB_REFERENCES = [
  {
    group: 'html',
    color: {
      shaodw: 'shadow-red-500',
      text: 'text-red-500',
      bg: 'bg-red-500',
    },
    members: ['elemets'],
  },
  {
    group: 'css',
    color: {
      shaodw: 'shadow-blue-500',
      text: 'text-blue-500',
      bg: 'bg-blue-500',
    },
    members: ['selectors', 'attribute'],
  },
  {
    group: 'javascript',
    color: {
      shaodw: 'shadow-yellow-500',
      text: 'text-yellow-500',
      bg: 'bg-yellow-500',
    },
    members: ['ES5', 'ES6', 'ES7'],
  },
  {
    group: 'react',
    members: ['basic'],
  },
  {
    group: 'vue',
    members: ['basic'],
  },
]

const References: React.FC<IProps> = () => {
  return (
    <div className="h-full min-h-full p-4 overflow-y-auto text-white bg-neutral-800">
      <h1 className="mb-6 text-center lg:text-6xl text-shadow-md">Knowledge Referneces</h1>
      {WEB_REFERENCES.map(({ group, color = {}, members }) => {
        return (
          <details
            open
            key={group}
            className={`mb-8 shadow-lg ${color.shaodw || 'shadow-green-500'} p-4 shadow-red-400`}
          >
            <summary className={`${color.text || 'text-white'}`}>{group}</summary>
            <div className="flex flex-wrap gap-3 py-3 leading-none">
              {members.map((member) => {
                return (
                  <Link
                    to={`/${group}/${member}`}
                    key={member}
                    className={`px-3 py-1 ${color.bg || 'bg-green-500'} rounded-md cursor-pointer`}
                  >
                    {member}
                  </Link>
                )
              })}
            </div>
          </details>
        )
      })}
    </div>
  )
}

export default References
