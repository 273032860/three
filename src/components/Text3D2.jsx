import React, { useState, useRef, useMemo,useEffect } from 'react'
import { extend, useFrame, useLoader } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import myfont from '../font/MiaoXiaoJieJ_Regular.json'
import * as THREE from 'three'


const text = `沈耀徽 Love 沈丹`

 
function Text3D2() {
  // const font = useLoader(FontLoader, 'https://threejs.org/examples/fonts/optimer_bold.typeface.json')
  const font = new FontLoader().parse(myfont)
  const geom = new TextGeometry(text, {
    font,
    size: 1,
    height: 0.5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03, //深度
    bevelSize: 0.02, //大小
    bevelOffset: 0,
    bevelSegments: 4,
  })
  geom.computeBoundingBox()
  // console.log(geom.boundingBox) //获取物体坐标

  geom.center() //字体居中

  const mesh = useRef()
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    const a = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(a) // 转圈
    mesh.current.rotation.x = Math.cos(a)
  })

  const ref = useRef()
  const temp = new THREE.Object3D()
  const count = 2000
  useEffect(() => {
    // ref.current.setMatrixAt(0, new THREE.Matrix4())
    for (let i = 0; i < count; i++) {
      temp.position.set((Math.random()-0.5)*50, (Math.random()-0.5)*50, (Math.random()-0.5)*50)
      temp.rotation.x=(Math.random()*Math.PI)
      temp.rotation.y=(Math.random()*Math.PI)
      temp.scale.set(Math.random(),Math.random(),Math.random())
      temp.updateMatrix()
      ref.current.setMatrixAt(i, temp.matrix)
    }
    // Update the instance
    ref.current.instanceMatrix.needsUpdate = true
  }, [])
  // const cref = useRef()
  useFrame((state, delta) => {
    const a = state.clock.getElapsedTime()
    ref.current.rotation.x +=0.01// 转圈
    ref.current.rotation.y +=0.01
  })

  // const v = Math.random()/20
  // console.log(v)
  return (
    <>
      <mesh
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}>
        <primitive attach="geometry" object={geom} />
        <meshNormalMaterial />
      </mesh>

      <instancedMesh ref={ref} args={[null, null, count]} >
        <torusBufferGeometry args={[0.3, 0.2, 20, 45]} />
        <meshNormalMaterial />
      </instancedMesh>
    </>
  )
}

export default Text3D2
