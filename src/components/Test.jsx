import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame,useThree } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
// import { useThree } from "@react-three/drei"

//动态增加粒子+动画

function Particles({count,...opts}) {
  // const scene = new THREE.Scene()
  const { invalidate } = useThree()
  const mesh = useRef()
  const meref = useRef()
  const mmref = useRef()
 let points=null

 useEffect(() => {
   meref.current.setAttribute('color', new THREE.BufferAttribute(colors, 3))
 }, [])
  const [positions, sizes, colors] = useMemo(() => {

    if(meref.current !=null) {
      console.log('开始清内存')
      meref.current.dispose()
      mmref.current.dispose()
     }
    
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count * 3)
   
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
      sizes[i] = Math.random() < 0.03 ? 15 : 6
      colors[i] = Math.random()
    }
    return [positions, sizes, colors]
    
  }, [count])




 

 
  useFrame((state, delta) => {
    
    const a = state.clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const x = meref.current.attributes.position.array[i3]
      const y = meref.current.attributes.position.array[i3+1]
      meref.current.attributes.position.array[i3 + 1] = Math.sin(a+x)
    }

    meref.current.attributes.position.needsUpdate = true
 
  })
 
  return (
    <>
      <points ref={mesh}    
      // scale={hovered ? 2.5 : 1} onPointerOut={(event) => setHover(false)} onPointerOver={(event) => setHover(true)}
       >
        <bufferGeometry ref={meref} >
          <bufferAttribute
 
            attach="attributes-position"
            // attach="attributes-color"
            array={positions}
            itemSize={3}
            count={count}
          />
        </bufferGeometry>
        <pointsMaterial
        ref={mmref}
          attach="material"
          size={0.03}
          color={colors}
          transparent
          depthWrite
          blending={THREE.AdditiveBlending}
          vertexColors
        />
      </points>
      {/* <mesh>
        <boxBufferGeometry/>
        <meshBasicMaterial/>
      </mesh> */}
    </>
  )
}

export default Particles
