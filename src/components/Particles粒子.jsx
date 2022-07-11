import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
// import { isFrameValue } from '@react-spring/core/dist/declarations/src/FrameValue'

function Particles(props) {
  const renderer = new THREE.WebGLRenderer()
  const mesh = useRef()
  const ref4 = useRef()
  const cref = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const count = 20000

  const [positions, sizes, colors] = useMemo(() => {
    // if(meref.current !=null) {
    //   console.log('开始清内存')
    //   meref.current.dispose()
    //   mmref.current.dispose()
    //  }

    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
      sizes[i] = Math.random() < 0.03 ? 15 : 6
      colors[i] = Math.random()
    }
    return [positions, sizes, colors]
  }, [])

  const meref = useRef()
  useEffect(() => {
    meref.current.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  }, [])

  const mouse = new THREE.Vector2() //获取鼠标坐标
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  })
  useEffect(() => {
    const rayDirection = new THREE.Vector3(1, 10, 0).normalize()
    const rayOrigin = new THREE.Vector3(-3, 0, 0)
    ref4.current.set(rayOrigin, rayDirection) //设置射线的位置和方向
  }, [])

  // console.log(Math.random()*5)
  useFrame((state) => {
    state.raycaster.setFromCamera(mouse, state.raycaster.camera)
    const v = state.raycaster.intersectObject(state.scene.children[1])
    // console.log(v)
    const a = state.clock.getElapsedTime()
    if (v.length > 0) {
      // console.log(v)
      var v1 = v[0]
      const all = meref.current.attributes.position.array //全部坐标
      const point = v1.point.x

      for (let i = 0; i < count; i++) {
        var i3 = i * 3
        var x = meref.current.attributes.position.array[i3]
        var y = meref.current.attributes.position.array[i3 + 1]
        var z = meref.current.attributes.position.array[i3 + 2]
        const v0 = new THREE.Vector3(x, y, z) //点的坐标  
        // console.log(i,v0)
        // console.log(v0.distanceTo(v1.point))
        if (v0.distanceTo(v1.point) < 3) {   //接触点与 点的距离小于3触发
          meref.current.attributes.position.array[i3] += Math.random() < 0.5 ? -1 : 1  //正负-1  1随机
          meref.current.attributes.position.array[i3 + 1] += Math.random() < 0.5 ? -1 : 1
           meref.current.attributes.position.needsUpdate = true
        }
      }

      // console.log()
      // const f = all.filter((item)=>{return item.distanceTo(point)<0.002})
      // console.log(f)
      // console.log(point)

      //  const a = state.clock.getElapsedTime()
      // for (let i = 0; i < count; i++) {
      // console.log(v1.point.x)
      // console.log(v1)

      // var i3 = i * 3
      // var x = meref.current.attributes.position.array[i3]
      // console.log(meref.current.attributes.position.array[i3])
      // console.log(v1.object.geometry.attributes.position.array[0])

      // console.log(j)
      // if (
      // meref.current.attributes.position.array[i3] ===
      // v1.object.geometry.attributes.position.array[0]
      // ) {
      //  const temp = meref.current.attributes.position.array.filter(()=>{})
      // console.log('匹配到',meref.current.attributes.position.array)
      // console.log('匹配到2',v1.object.geometry.attributes.position.array)
      // v1.object.geometry.attributes.position.array[0] = Math.sin(a + x)

      // meref.current.attributes.position.array[i3] = Math.sin(a+x)

      // meref.current.attributes.position.array[i3+2] = Math.sin(a+x)
    }
    // mesh.current.rotation.y = Math.sin(a) // 转圈
    // mesh.current.rotation.y = Math.cos(a)
    meref.current.attributes.position.needsUpdate = true
    // }
    // }

    // renderer.render( state.scene, state.camera );

    // (mesh.current.rotation.x =state.clock.getElapsedTime())
    // const a = state.clock.getElapsedTime()
    // mesh.current.rotation.x = Math.sin(a) // 转圈
    // mesh.current.rotation.x = Math.cos(a)
    // window.addEventListener('mousemove',(e)=>{
    //   console.log(e.clientX)
    // })

    //  gasp.to(mesh,{duration:1,delay:1,x:2})
    // for (let i = 0; i < count; i++) {
    //   const i3 = i * 3

    //   const x = meref.current.attributes.position.array[i3]
    //   const y = meref.current.attributes.position.array[i3+1]

    //   meref.current.attributes.position.array[i3 + 1] = Math.sin(a+x)

    // }

    // meref.current.attributes.position.needsUpdate = true

    // console.log()
    // console.log(meref.current.attributes.position.array)
  })

  return (
    <>
      <points
        ref={mesh}
        // scale={hovered ? 2.5 : 1} onPointerOut={(event) => setHover(false)} onPointerOver={(event) => setHover(true)}
      >
        <bufferGeometry ref={meref}>
          <bufferAttribute
            attach="attributes-position"
            // attach="attributes-color"
            array={positions}
            itemSize={3}
            count={positions.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          size={0.05}
          color={colors}
          transparent
          depthWrite
          blending={THREE.AdditiveBlending}
          vertexColors
        />
      </points>
      <raycaster ref={ref4} />
      {/* <mesh>
        <boxBufferGeometry/>
        <meshBasicMaterial/>
      </mesh> */}
    </>
  )
}

export default Particles
