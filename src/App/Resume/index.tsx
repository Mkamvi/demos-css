/**
 * author iWuzhi
 * date 2021-12-21 11:17:03
 */

import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {}

const TIMELINES = [
  [
    '2013.09-2017.06',
    {
      title: '杭州电子科技大学',
      desc: '本科·物流管理',
      achieve: '自学Java，Web #Java #Web',
    },
  ],
  [
    '2016.11-2017.08',
    {
      title: '杭州臻至科技有限公司',
      desc: '研发部·前端开发工程师(实习)',
      achieve: '内部系统建设 #Vue #NodeJS',
    },
  ],
  [
    '2017.08-2019.11',
    {
      title: '上海暖水信息技术有限公司',
      desc: '研发部·前端开发工程师',
      achieve: '中台及H5 #React #Webpack #Antd #JSONSchema',
    },
  ],
  [
    '2019.12-2020.05',
    {
      title: '杭州博彦科技信息有限公司(外派阿里)',
      desc: '研发部·前端开发工程师',
      achieve: '负责XSpace在线、热线配置 #React #Webpack #微前端',
    },
  ],
  [
    '2020.05-2021.11',
    {
      title: '销售易',
      desc: '研发部·实体域·前端开发工程师',
      achieve: '平台基础控件开发 #Antd #Amis #React #微前端 #SingleSPA',
    },
  ],
].reverse()
const Resume: React.FC<IProps> = () => {
  return (
    <div className="h-full p-6 m-auto overflow-y-auto prose text-white bg-black">
      <h3 className="text-center text-red-500 text-shadow-md">时间轴</h3>
      {TIMELINES.map(([time, { title, desc, achieve }]) => {
        return (
          <section className="px-3 py-2 mb-8 rounded-none shadow-md shadow-red-50" key={time}>
            <time className="text-red-500">{time}</time>
            <h3 className="text-red-50">{title}</h3>
            <aside className="text-sm opacity-80">{desc}</aside>
            <p className="text-sm opacity-60">{achieve}</p>
          </section>
        )
      })}
      <Link to="/k" className="text-white">
        去知识宝库
      </Link>
    </div>
  )
}

export default Resume
