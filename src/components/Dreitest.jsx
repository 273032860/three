import React, { useRef, useState } from 'react'
import {
  Sky,
  Cloud,
  Stars,
  Segments,
  Segment,
  OrbitControls,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Dreitest() {
  const ref = useRef([])
  //   useFrame((state) => {
  //     const time = state.clock.elapsedTime
  //     const x = Math.sin((i / 5000) * Math.PI) * 10
  //     const y = Math.cos((i / 5000) * Math.PI) * 10
  //        const z = Math.cos((i * time) / 1000)
  //       r.start.set(x, y, z)
  //        r.end.set(x + Math.sin(time + i), y + Math.cos(time + i), z)
  //      r.color.setRGB(x / 10, y / 10, z)
  // })
  useFrame(({ state,clock }) => {
    ref.current.forEach((r, i) => {
      const time = clock.elapsedTime
      const x = Math.sin((i / 5000) * Math.PI) * 10
      const y = Math.cos((i / 5000) * Math.PI) * 10
      const z = Math.cos((i * time) / 1000)
      r.start.set(x, y, z)
      r.end.set(x + Math.sin(time + i), y + Math.cos(time + i), z)
      r.color.setRGB(x / 10, y / 10, z)
    })
  })
  return (
    <>
      <OrbitControls />
      <Segments limit={10} lineWidth={1.0}>
      {Array.from({ length: 10 }).map((_, i) => (
        <Segment
          key={i}
          ref={(r) => (ref.current[i] = r)}
          color="orange"
          start={[0, 0, 0]}
          end={[0, 0, 0]}
        />))}
      </Segments>
      <mesh>
        {/* <Sky /> */}
        <Stars />
        <Cloud position={[-4, -2, 0]} args={[3, 2]} />
      </mesh>
    </>
  )
}

export default Dreitest
