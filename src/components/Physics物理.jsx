import { Box, Plane,Sphere } from '@react-three/drei'
import React from 'react'
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon'
import * as can from '@react-three/cannon'
console.log(can)

function PhyPlane({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }))

  return (
    <Plane args={[1000, 1000]} ref={ref}>
      <meshStandardMaterial color={color} />
    </Plane>
  )
}

function PhyBox(props) {
  const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }))

  return (
    <Box
      args={[1, 1, 1]}
      ref={ref}
      onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])}>
      <meshNormalMaterial />
    </Box>
  )
}

function SphereShape(props) {
  const [ref, api] = useSphere(() => ({ mass: 1}))

  return (
    <Sphere ref={ref}
      args={[0.5]} 
      position={[0,-10,0]}
      onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])}
      >
      <meshNormalMaterial />
    </Sphere>
  )
}



function Physics1({ opts }) {
  return (
    <>
      <Physics gravity={[0, -10, 0]}>
        <PhyPlane
          color="hotpink"
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <PhyPlane color="lightblue" position={[0, 0, -10]} />
        <PhyBox position={[2, 0, -5]} />
        <PhyBox position={[0, 0, -5]} />
        <PhyBox position={[-2, 0, -5]} />
        <SphereShape />
      </Physics>
      <ambientLight intensity={0.3} />
      <pointLight intensity={0.8} position={[5, 0, 5]} />
    </>
  )
}

export default Physics1
