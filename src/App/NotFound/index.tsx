/**
 * author iWuzhi
 * date 2021-12-21 12:59:42
 */

import React from 'react';


interface IProps {

}

const NotFound: React.FC<IProps> = () => {
  return (
    <div className="flex items-center justify-center min-h-full min-h-screen bg-neutral-800">
      <section>
        <h1 className="text-6xl text-red-500 text-shadow-md">404</h1>
        <p className="mt-3 text-sm text-center text-white text-shadow">疯狂加班中...</p>
      </section>
    </div>
  )
}

export default NotFound;