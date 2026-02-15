import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { work } from '../constants'

const Showcase = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() =>{
        const projects = [project1Ref.current,project2Ref.current,project3Ref.current];
        projects.forEach((card,index) =>{
            gsap.fromTo(card,{
                y:50,
                opacity:0
            },
            {
                y:50,
                opacity:1,
                duration:1,
                delay:0.3*(index+1),
                scrollTrigger:{
                    trigger:card,
                    start:'top bottom-=100'
                }
            }
        )

        })
        gsap.fromTo(sectionRef.current,{ opacity:0},{opacity:1, duration: 1.5})
    },[])


  return (
    <section id="work" className='app-showcase' ref={sectionRef}>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* left */}
                <div className='first-project-wrapper' ref={project1Ref}>
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
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#895d32]' >
                            <img src={work[1].imgPath} />
                        </div>
                        <h2>{work[1].heading}</h2>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#051019]' >
                            <img src={work[2].imgPath} />
                        </div>
                        <h2>{work[2].heading}</h2>
                    </div>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Showcase