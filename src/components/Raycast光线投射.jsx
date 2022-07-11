import { createRoot } from 'react-dom/client'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  PerspectiveCamera,
  OrbitControls,
  OrthographicCamera,
} from '@react-three/drei'
import { BufferAttribute } from 'three'
import * as dat from 'dat.gui'
import * as THREE from 'three'

function Raycast() {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()

  const mouse = new THREE.Vector2() //获取鼠标坐标
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -((e.clientY / window.innerHeight) * 2 - 1)
  })

  useFrame((state) => {
    ref1.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 1.5
    ref2.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 1.5
    ref3.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.4) * 1.5

    const objects = [ref1.current, ref2.current, ref3.current]
    const v = state.raycaster.intersectObjects(state.scene.children.filter((item)=>{
      return item.type==='Mesh'
    }))

    // const objects = [ref1.current,ref2.current,ref3.current]
    ref4.current.setFromCamera(mouse, state.raycaster.camera)
    // console.log(mouse)
    // console.log(state.raycaster.camera)
    // console.log(v)
    // console.log(state.scene.children)
    // const s = ref4.current.intersectObjects(objects)   //检查与射线相交的物体
    for (const obj of objects) {
      obj.material.color.set('#ff0000')
    }

    for (const intersect of v) {
      intersect.object.material.color.set('#0000ff') //获取物体对象并把颜色设置成蓝色
    }
    //  console.log(s)
    //  console.log(objects)
  })
  useEffect(() => {
    // const rayDirection = new THREE.Vector3(1,0,0).normalize()
    // const rayOrigin = new THREE.Vector3(-3,0,0)
    // ref4.current.set(rayOrigin,rayDirection)   //设置射线的位置和方向
    // const objects = [ref1.current,ref2.current,ref3.current]
    // const v = ref4.current.setFromCamera(mouse,ref5.current)
    // console.log(ref4.current)
    // console.log(ref5.current)
    // console.log(v)
    // 
    // const s = ref4.current.intersectObjects(objects)   //检查与射线相交的物体
    // for(const obj of objects){
    //   obj.material.color.set('#ff0000')
    // }
    // for(const intersect of s){
    //   intersect.object.material.color.set('#0000ff')   //获取物体对象并把颜色设置成蓝色
    // }
    // console.log(ref4.current)
    // console.log(s)
  }, [])

  return (
    <>
      {/* <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1,6,6,6]} ref={cref}/>
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} wireframe />
      </mesh> */}
      <mesh ref={ref1} >
        <sphereBufferGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="red" />
      </mesh>
      <mesh position={[3, 0, 0]} ref={ref2}>
        <sphereBufferGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="red" />
      </mesh>
      <mesh position={[-3, 0, 0]} ref={ref3}>
        <sphereBufferGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="red" />
      </mesh>
      <raycaster ref={ref4} />
      <perspectiveCamera ref={ref5} position={[0, 8, 0]} />
    </>
  )
}

export default Raycast
