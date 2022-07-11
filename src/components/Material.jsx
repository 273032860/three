import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame,useLoader } from '@react-three/fiber'
import Snipaste from '../image/Snipaste.png'
import * as THREE from 'three'
function Material(props) {
  const mesh = useRef()
  const cref = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    const a = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(a) // 转圈
    mesh.current.rotation.x = Math.cos(a)
  })
  const texture = useLoader(THREE.TextureLoader, Snipaste)
  return (
    <>
      <mesh
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}>
        <boxGeometry args={[1, 1, 1]} ref={cref} />
        <meshBasicMaterial attach={`material-0`} color="red" />
        <meshBasicMaterial attach={`material-1`} color="blue" />
        <meshBasicMaterial attach={`material-2`} color="black" />
        <meshBasicMaterial attach={`material-3`} color="green" />
        <meshBasicMaterial attach={`material-4`} color="pink" />
        <meshBasicMaterial attach={`material-5`} color="yellow" />

      </mesh>
      <mesh position={[2.5, 0, 0]}>
        <sphereBufferGeometry   />
        <meshBasicMaterial color="red" opacity={0.5} transparent  alphaMap={texture}  side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[4.5, 0, 0]}>
        <planeBufferGeometry    />
        <meshBasicMaterial color="blue"   transparent  alphaMap={texture} />
      </mesh>
      <mesh position={[-1.5, 0, 0]}>
        <sphereBufferGeometry  args={[0.5,16,16]}  />
        <meshNormalMaterial  flatShading />
      </mesh>
      <mesh position={[-3, 0, 0]}>
        <sphereBufferGeometry  args={[0.5,16,16]}  />
        <meshMatcapMaterial    />
      </mesh>
      <mesh position={[-4.5, 0, 0]}>
        <sphereBufferGeometry  args={[0.5,16,16]}  />
        <meshDepthMaterial     />
      </mesh>
      <mesh position={[-6, 0, 0]}>
        <sphereBufferGeometry  args={[0.5,16,16]}  />
        <meshPhongMaterial  specular='red'  />
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <sphereBufferGeometry  args={[0.5,16,16]}  />
        <meshToonMaterial    />
      </mesh>
      <mesh position={[1.5, 1.5, 0]}>
        <sphereBufferGeometry  args={[0.5,16,16]}  />
        <meshStandardMaterial metalness={0.95} roughness={0.95}    />
      </mesh>
      <pointLight/>
    </>
  )
}

export default Material
