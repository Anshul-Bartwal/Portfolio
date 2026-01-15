import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import { useMediaQuery} from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import Snowfall from 'react-snowfall'

const HeroExperience = () => {
    const isTablet = useMediaQuery({query:'(max-width: 1024px)' });
    const isMoblie = useMediaQuery({query:'(max-width: 768px)' });
  return (
    <>
    
    
    <Canvas camera={{position:[0,0,15] ,fov:45}}>
        
        
        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            maxPolarAngle={Math.PI /2}
            minPolarAngle={Math.PI/5}
        />
        <HeroLights />
        <group 
            scale={isMoblie ? 0.7:1}
            position={[0,-3.5,0]}
            rotation={[0, -Math.PI/4 , 0]}
            >
            <Room />

        </group>
        

    </Canvas>
    <Snowfall color='#82C3D9' snowflakeCount={75} speed={[1,1]} wind={[0.5,2]}/>
    </>
  )
}

export default HeroExperience