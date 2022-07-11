import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Datgui(props) {
 

  const mesh = useRef()
  const cref = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    const a = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(a) // 转圈
    mesh.current.rotation.x = Math.cos(a)
  })

  return (
    <>
      <mesh
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}>
        <boxGeometry args={[1, 1, 1, 6, 6, 6]} ref={cref} />
        <ambientLight intensity={0.1} />
        <meshStandardMaterial color={props.color} wireframe />
      </mesh>
    </>
  )
}

export default Datgui
