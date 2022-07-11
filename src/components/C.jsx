import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls,OrthographicCamera  } from '@react-three/drei'
import { BufferAttribute } from 'three'
import * as dat from 'dat.gui'

 


function C(props) { 

   
  // window.addEventListener('keydown',(e)=>{
  //   console.log(e)
  // })
  // window.addEventListener('mousemove',(e)=>{
  //   console.log(e.clientX)
  // })
//   window.addEventListener('resize',(e)=>{
//     console.log('resize')
//  })

  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const cref = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    // (mesh.current.rotation.x =state.clock.getElapsedTime())
    const a = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(a) // 转圈
    mesh.current.rotation.x = Math.cos(a)
  })


 


  return (
    <>
      {' '}
      {/* <OrthographicCamera  makeDefault fov={95} position={[0, 0, 3]} ref={cref}>
        <ambientLight intensity={0.1} />
      </OrthographicCamera> */}
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1,6,6,6]} ref={cref}/>
        {/* <BufferAttribute /> */}
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} wireframe />
      </mesh>
    </>
  )
}

export default C
