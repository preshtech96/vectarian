import React from 'react'
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <div className="w-full flex justify-center items-center bg-green-500 text-white py-10">
      <div className="flex flex-wrap justify-center gap-10 sm:gap-16 md:gap-28">
        <div className="flex flex-col items-center w-32 sm:w-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <CountUp start={0} end={102} duration={3} />
          </h1>
          <p className="text-sm sm:text-base md:text-lg">Customers</p>
        </div>
        <div className="flex flex-col items-center w-32 sm:w-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <CountUp start={0} end={8640} duration={3} />+
          </h1>
          <p className="text-sm sm:text-base md:text-lg">Professionals</p>
        </div>
        <div className="flex flex-col items-center w-32 sm:w-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <CountUp start={0} end={48} duration={3} />+
          </h1>
          <p className="text-sm sm:text-base md:text-lg">Products</p>
        </div>
        <div className="flex flex-col items-center w-32 sm:w-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <CountUp start={0} end={98} duration={3} />+
          </h1>
          <p className="text-sm sm:text-base md:text-lg">Pets Hosted</p>
        </div>
      </div>
    </div>
  )
}
export default Counter
