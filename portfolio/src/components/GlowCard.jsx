import { ArcballControls } from '@react-three/drei';
import React, { useRef } from 'react'
import { MaxEquation } from 'three';

const GlowCard = ({ card,children,index }) => {
  const cardRefs = useRef([]);
  
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    //get mouse position
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width/2;
    const mouseY = e.clientY - rect.top - rect.height/2;

    //angle from the center
    let angle = Math.atan2(mouseY,mouseX) * 180/Math.PI;

    angle = (angle+360)%360;
    card.style.setProperty('--start',angle+60)


  }
  return (
    <div ref={(el) => {cardRefs.current[index] = el}} className='card card-border timeline-card rounded-xl p-10 ' 
      onMouseMove={handleMouseMove(index)}>
        <div className='glow'/>

        <div className="flex items-center gap-1 mb-10">
          {Array.from({length:5},(_,i) =>(
            <img src='/images/star.png' key={i} alt='star'/>
          ))}
        </div>

        <div className="mb-5">
          <p className='text-white-50 text-lg'>{card.review}</p>
        </div>

        {children}
    </div>

  )
}

export default GlowCard