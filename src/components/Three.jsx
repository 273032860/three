import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
// import { useFrame } from 'react-three-fiber'
import { BufferGeometry } from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'

function Three(props) {
  // This reference gives us direct access to the THREE.Mesh object这个参考让我们可以直接接触到THREE。 网格物体
  const ref = useRef()
  // Hold state for hovered and clicked events悬停和单击事件保持状态
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame订阅这个组件到渲染循环，每帧旋转网格
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    ref.current.rotation.x = a*Math.PI*2
    // console.log(a)

    // console.log(a)
    // state.camera.lookAt(ref.current.position)
  })
  // console.log(useFrame)
  // Return the view, these are regular Threejs elements expressed in JSX返回视图，这些是在JSX中表示的常规Threejs元素
  return (
    <>
      <mesh
        {...props}
        position={[5.5, 2.5, 1.8]}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    </>
  )
}

export default Three
