import React from 'react'
import { counterItems } from '../constants'
import CountUp from "react-countup"
const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-20'>
        
        <div className='mx-auto grid-4-cols'>
            {counterItems.map((counterItem) => {
                return(
                    <div key={counterItem.label} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
                        <div className='counter-number text-white text-xl mb-2 font-bold'>  
                            <CountUp suffix={counterItem.suffix} end={counterItem.value} />
                        </div>
                        <div className='text-lg text-white-50'>
                            {counterItem.label}

                        </div>
                    </div>
                )
            })

            }
        </div>
    </div>
  )
}

export default AnimatedCounter