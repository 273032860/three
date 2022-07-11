import React, { useRef, useState } from 'react'
import { Canvas, useFrame,useLoader } from '@react-three/fiber'
import Snipaste from '../image/Snipaste.png'
import * as THREE from 'three'


    

function Texture(props) {
  // const texture = new THREE.TextureLoader().load(Snipaste);
  const texture = useLoader(THREE.TextureLoader, Snipaste)
  texture.center.x=0.5
  texture.center.y=0.5
  texture.wrapS = THREE.MirroredRepeatWrapping
  texture.wrapT = THREE.MirroredRepeatWrapping
  texture.offset.x = 0.5
  texture.offset.y = 0.5

  const mesh = useRef()
  const cref = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    const a = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(a) // 转圈
    mesh.current.rotation.x = Math.cos(a)
  })
  // console.log('cref',cref.current.attributes.nv)
  return (
    <>
      <mesh
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}>
        <boxGeometry args={[1, 1, 1, 6, 6, 6]} ref={cref} />
        <ambientLight intensity={0.8} />
        <meshStandardMaterial color={props.color}   map={texture}/>
      </mesh>
    </>
  )
}

export default Texture
