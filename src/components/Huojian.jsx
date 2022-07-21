import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {
  useGLTF,
  Bounds,
  PerspectiveCamera,
  OrbitControls,
  useFBO,
  Plane,
  Line,
  PresentationControls,
  QuadraticBezierLine,
  MeshDistortMaterial,
  PointMaterial,
  useCursor,
  BBAnchor,
  Html,
  Box,
  Instances,
  Instance,
  Sphere,
  Merged
} from '@react-three/drei'
import fm from '../image/fm.jpg'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { useState, useRef, useMemo, useEffect, Suspense } from 'react'

export default function Huojian({ opts }) {
  const cref = useRef()
  const gltf = useLoader(GLTFLoader, '/f5.glb')
  // console.log(scene)
  // gltf.scene.traverse((child)=>{console.log(child)})
  const texture = useLoader(THREE.TextureLoader, fm)
  texture.flipY = false
  // console.log(texture)
  const xx = useRef()
  const bake = new THREE.MeshBasicMaterial({ map: texture })
  // useEffect(() => {
  //   xx.current.traaverse((child)=>{
  //     console.log(child)
  //   })

  const { nodes, materials } = useGLTF('/f8.glb')

  //   // console.log(xx.current)
  // },[])
  gltf.scene.traverse((child) => {
    child.material = bake
  })

  const [virtualScene] = useState(() => new THREE.Scene())
  const fbo = useFBO(400, 400)
  useFrame((state) => {
    // console.log(state)
    if (cref.current) {
      state.gl.setRenderTarget(fbo)
      state.gl.render(virtualScene, cref.current)

      state.gl.setRenderTarget(null)
    }
  })
  const [hovered, set] = useState()
  useCursor(hovered, 'pointer', 'auto')
  return (
    <>
      <Bounds fit clip observe>
        <Suspense fallback={null}>
          <primitive position={[-5, 0, 0]} object={gltf.scene} ref={xx} />
          {/* <primitive  attach="material"
          object={bake}/> */}
        </Suspense>

        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
          <mesh
            position={[3, 0, 0]}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}>
            <boxBufferGeometry>
              <BBAnchor anchor={[4, 1, 1]}>
                <Html center>
                  <span>Hello world!</span>
                </Html>
              </BBAnchor>
            </boxBufferGeometry>
            <meshNormalMaterial
              color="red"
              distort={0.6}
              speed={1}
              radius={1}
            />
          </mesh>
          <PointMaterial
            transparent
            vertexColors
            size={15}
            sizeAttenuation={false}
            depthWrite={false}
          />
        </PresentationControls>
        <Line
          points={[
            [0, 0, 0],
            [1, 1, 1],
            [2, 2, 2],
            [3, 3, 3],
          ]} // Array of points
          color="red" // Default
          lineWidth={1} // In pixels (default)
          dashed={false} // Default
          vertexColors={[
            [0.4, 0.3, 1],
            [0.5, 1, 1],
            [0.3, 0.6, 0.5],
            [1, 1, 1],
          ]} // Optional array of RGB values for each point
          // All THREE.LineMaterial props are valid
        />
        <QuadraticBezierLine
          start={[1, 1, 1]}
          end={[5, 5, 0]}
          segments={1} //细分
          color="red" //颜色
          lineWidth={5} //粗细
          dashed={true}
        />
        <Box position={[3, 3, 3]}>
          <BBAnchor anchor={[1, 1, 1]}>
            <Box />
          </BBAnchor>
        </Box>
        
      </Bounds>
      <hemisphereLight color="white" groundColor="red" intensity={0.75} />
      <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
      <pointLight />
      <PerspectiveCamera ref={cref} />

      {/* <FirstPersonControls activeLook={false} heightCoef={10} lookSpeed={0.05} constrainVertical={false} verticalMax={0}/> */}
      <Plane args={[4, 4, 4]} position={[0, 15, 0]}>
        <meshBasicMaterial map={fbo.texture} color="red" />
        <pointLight />
      </Plane>
      <OrbitControls />
    </>
  )
}
