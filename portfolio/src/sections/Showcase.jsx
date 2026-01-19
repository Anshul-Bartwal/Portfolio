import React from 'react'
import { work } from '../constants'
const Showcase = () => {
  return (
    <div id="work" className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* left */}
                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src={work[0].imgPath} />
                    </div>
                    <div className='text-content'>
                        <h2>{work[0].heading}</h2>
                        <p className='text-white-50 md:text-xl'>{work[0].paragraph}</p>
                    </div>
                </div>


                {/* right */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project'>
                        <div className='image-wrapper bg-[#ffefdb]' >
                            <img src={work[1].imgPath} />
                        </div>
                        <h2>{work[1].heading}</h2>
                    </div>

                    <div className='project'>
                        <div className='image-wrapper bg-[#ffe7bd]' >
                            <img src={work[2].imgPath} />
                        </div>
                        <h2>{work[2].heading}</h2>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Showcase