import React,{useRef} from 'react'
import {
  Physics,
  usePlane,
  useBox,
  useSphere,
  useCompoundBody,
  useParticle,
  usePointToPointConstraint,
  useRaycastAll,
  useRaycastAny,
  useRaycastClosest,
  useRaycastVehicle,
  useSpring,
  useTrimesh,
} from '@react-three/cannon'
import * as cannon from '@react-three/cannon'
import { useFrame } from 'react-three-fiber'
import fit from '../sound/2483.mp3'
import { proxy, useSnapshot } from "valtio"

const audio = new Audio(fit)
const state = proxy({
  count: 0,
  api: {
    pong(velocity) {
      audio.currentTime = 0
      audio.volume = Math.random()
      audio.play()
      console.log(velocity)
      if (velocity > 4) ++state.count
    },
    reset: () => (state.count = 0),
  },
})

function Plane(props) {
  const [ref, api] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }))

  

  //  useFrame(({mouse})=>{
  //   api.rotation.set(-Math.PI/2-mouse.y*0.2,0,0)
  //  })
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      {/* <meshStandardMaterial /> */}
    </mesh>
  )
}

function Cube(props) {
  const [ref, api] = useBox(() => ({
    mass: 1000,
    position: [0, 15, 0],
    args: [2, 2, 2],
  }))
  useFrame(({ mouse }) => {
    api.applyLocalForce([0, 0, 0], [15, 5, 0])
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshNormalMaterial />
    </mesh>
  )
}

function Sphere(props) {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [5, 25, 0],
    args: [2],
    onCollide: (e) => state.api.pong(e.contact.impactVelocity)  //触发碰撞事件,碰撞后发声音
  }))



  useFrame(({ mouse, collide }) => {
    api.applyLocalForce([2, 0, 0], [0, 0, 0])

  })
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[2, 32, 32]} />
      <meshNormalMaterial />
    </mesh>
  )
}

function P() {
  // const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))
  // const [ref2] = useSphere(() => (
  // const [ref1] = useBox(() => ({ mass: 1, position: [0, 5, 0]  })){ mass: 2, position: [4, 5, 0]  }))
  const ref = useRef()
  
  return (
    <Physics gravity={[0, -10, 0]} ref={ref}>
      <Plane />
      <Cube />
      <Sphere />
    </Physics>
  )
}

export default P
