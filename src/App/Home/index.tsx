/**
 * author iWuzhi
 * date 2021-12-18 14:00:31
 */
import { useState, useEffect } from 'react'
import ReactPageScroller from 'react-page-scroller'

import Resume from '../Resume'

import bg from './bg.png'

const cliSays = [
  ['whoami', ['X·M']],
  ['gender', ['Male']],
  ['birth', ['199X-05-2X XX:XX:XX']],
  ['profession', ['#ComputerEngineer #Web #React #JavaScript #HTML #CSS #LESS']],
  ['hobby', ['#Coding #Games #Music']],
  ['...', ['...']],
]

interface IProps {}

const PAUSE_TIME = 250

const Home: React.FC<IProps> = () => {
  const [says, setSays] = useState([])
  const [page, setPage] = useState<number>(0)

  const toPrePage = () => {
    setPage((pre) => {
      return pre - 1
    })
  }
  const sayTimer = (finish) => {
    const timer = globalThis.setTimeout(() => {
      setSays((pre) => {
        const nextSays = pre.concat()
        nextSays.push(cliSays[pre.length])
        return nextSays
      })
      finish()
    }, PAUSE_TIME)
    return timer
  }
  useEffect(() => {
    let timer
    let sayingIndex = 0
    const finish = () => {
      if (sayingIndex < cliSays.length - 1) {
        sayingIndex++
        timer = sayTimer(finish)
      }
    }
    timer = sayTimer(finish)
    return () => {
      sayingIndex = 0
      globalThis.clearTimeout(timer)
    }
  }, [])

  return (
    <div className="bg-black">
      <ReactPageScroller
        customPageNumber={page}
        blockScrollUp
        pageOnChange={(nextPage) => {
          setPage(nextPage)
        }}
      >
        <div className="relative flex items-center justify-center h-full text-white">
          <div
            className="absolute top-0 left-0 z-0 w-full h-full bg-[center_left_-10rem] lg:bg-center  bg-no-repeat bg-cover bg-black"
            style={{ backgroundImage: `url('${bg}')`, zIndex: -1 }}
          />
          <div className="inline-block w-4/5 p-6 border rounded-md shadow-lg h-3/5 text-blue backdrop-blur-md shadow-blue-500/50 border-blue-500/50">
            <h1 className="mb-4 text-4xl text-center lg:text-6xl text-gr">Welcome2 !</h1>
            <ul>
              {says.map(([cmd, output]) => {
                return (
                  <li key={cmd}>
                    <div>
                      <i className="mr-4 text-green-300">→</i>
                      <i className="typing" data-len={cmd.length}>
                        {cmd}
                      </i>
                    </div>
                    <div>{output}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <Resume />
      </ReactPageScroller>
      <button
        type="button"
        className="fixed px-6 text-white border rounded-full shadow-md cursor-pointer shadow-white shaodw-lg top-3 right-3 text-shadow"
        onClick={toPrePage}
        hidden={page === 0}
      >
        ↑
      </button>
    </div>
  )
}

export default Home
