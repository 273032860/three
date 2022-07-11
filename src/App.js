import { Particlest } from './components/Particlest'
import './App.css'
import React, { useState, useRef, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, CameraShake } from "@react-three/drei"
import * as THREE from "three"
import Three from './components/Three'
import C from './components/C'
import Arry from './components/Arry'
import Arry2 from './components/Arry2'
import Datgui from './components/Datgui'
import DatGui, { DatColor, DatNumber, DatSelect, DatBoolean, liveUpdate } from "react-dat-gui"
// import fonts from "./fonts"
import "./styles.css"
import Texture from './components/Texture'
import Material from './components/Material'
import DatMaterial from './components/DatMaterial'
import Text3D from './components/Text3D'
import Text3D2 from './components/Text3D2'
import Lightshadow from './components/Lightshadow'
import Particles from './components/Particles粒子'
import Galaxy from './components/Galaxy'
// import Galaxy2 from './components/Galaxy2'
import Raycast from './components/Raycast光线投射'
import Test from './components/Test'
import Hok from './components/Hok'
import { useControls } from 'leva'
import Physices1 from './components/Physics物理'
import P from './components/P物理'

function App () {

  // dat 数据
  const [opts, setOpts] = useState({
    geometry: 'BoxGeometry',
    material: 'MeshStandardMaterial',
    materialMap: false,
    wireframe: false,
    opacity: 1,
    materialAlphaMap: false,
    materialSide: false,
    flatShading: false,
    metalness: 0,
    roughness: 0,
    font: "Philosopher",
    x: 0,
    y: 0,
    z: 0,
    count: 100,
    fontSize: 12,
    color: "#99ccff",
  })
  //galaxy数据
  // const [opts, setOpts] = useState({

  //   count: 100,
  //   randius:5,
  //   branch:3,
  //   spin:1,
  //   randomness:0.2,
  //   randompower:7
  // })



  const ref = useRef()
  const cref = useRef()
  const cref1 = useRef()

  // useFrame()
  // console.log(ref.current) // 获得Vector3三维向量 获取物体与相机的距离
  // window.addEventListener('dblclick', () => {//监听双击
  //   if (!document.fullscreenElement) {
  //     ref.current.requestFullscreen()
  //     console.log('全屏了')
  //   } else {
  //     document.exitFullscreen()
  //     console.log(ref.current)
  //     console.log('退出全屏')
  //   }
  // })

  // const props = useControls({
  //   focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
  //   speed: { value: 100, min: 0.1, max: 100, step: 0.1 },
  //   aperture: { value: 1.8, min: 1, max: 5.6, step: 0.1 },
  //   fov: { value: 60, min: 0, max: 200 },
  //   curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 }
  // })

  return (
    <div className='h-[100vh] bg-black' >
      <h1 className='text-white'>  </h1>
      <button className='bg-white'   >+100</button>

      <Canvas ref={ref} className='h-full'  >

        {/* <PerspectiveCamera  fov={75} position={[3, 4, 4]} /> */}
        {/* <mesh
          {...props}

          position={[0.5, 0.5, 1.8]} scale={[3, 1.5, 1.5]} rotation={[1, 0, 0]}   ref={ref}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='red' />
        </mesh> */}
        {/* <Three/> */}
        <OrbitControls />
        <primitive object={new THREE.AxesHelper(10)} />
        {/* <C position={[-1.2, 0, 0]} ref={cref1}/>
        <C position={[1.2, 0, 0]} /> */}
        {/* <Arry/> */}
        {/* <Arry2 /> */}
        {/* <Datgui  color={opts.color}/> */}

        {/* <Texture  color={opts.color}/> */}
        {/* <Material  color={opts.color}/> */}
        {/* <DatMaterial opts={opts} /> */}
        {/* <Text3D2/>/ */}
        {/* <Lightshadow opts={opts}/> */}
        {/* <Particles/> */}

        {/* <Test {...opts}/> */}
        {/* <ambientLight intensity={0.5} /> */}
        {/* <Galaxy opts={opts} />  */}
        {/* <Galaxy2 opts={opts} /> */}
        {/* <Raycast/> */}
        {/* <Physices1 opts={opts} /> */}
        <P   />
      </Canvas>
      <DatGui data={opts} onUpdate={setOpts} liveUpdate={true}   >


        {/* <DatNumber path="count" min={100} max={90000} step={10} />
        <DatNumber path="randius" min={1} max={30} step={1} />
        <DatNumber path="branch" min={1} max={30} step={1} />
        <DatNumber path="spin" min={0.2} max={2} step={0.01} />
        <DatNumber path="randomness" min={0} max={3} step={0.01} />
        <DatNumber path="randompower" min={0} max={10} step={0.1} /> */}

        {/* <DatSelect className='text-emerald-600' label='几何geometry' path="geometry" options={['BoxGeometry', 'CapsuleGeometry', 'CircleGeometry', 'ConeGeometry', 'CylinderGeometry', 'DodecahedronGeometry', 'EdgesGeometry', 'ExtrudeGeometry', 'IcosahedronGeometry', 'LatheGeometry', 'LineBasicMaterial', 'OctahedronGeometry', 'PlaneGeometry', 'PolyhedronGeometry', 'RingGeometry', 'ShapeGeometry', 'SphereGeometry', 'TetrahedronGeometry', 'TorusGeometry', 'TorusKnotGeometry', 'TubeGeometry', 'WireframeGeometry']} />
        <DatSelect className='text-emerald-600' label='材质material' path="material" options={['MeshBasicMaterial', 'MeshDepthMaterial', 'MeshDistanceMaterial', 'MeshLambertMaterial', 'MeshMatcapMaterial', 'MeshNormalMaterial', 'MeshPhongMaterial', 'MeshPhysicalMaterial', 'MeshStandardMaterial', 'MeshToonMaterial', 'LineBasicMaterial', 'LineDashedMaterial', 'PointsMaterial', 'RawShaderMaterial', 'ShaderMaterial', 'ShadowMaterial', 'SpriteMaterial']} />
        <DatBoolean path="materialMap" label="纹理texture" />
        <DatBoolean path="wireframe" label="线框wireframe" />
        <DatNumber path="opacity" min={0} max={1} step={0.01} label="透明度opacity" />
        <DatBoolean path="materialAlphaMap" label="纹理透明AlphaMap" />
        <DatBoolean path="materialSide" label="纹理双透明Side" />
        <DatBoolean path="flatShading" label="flatShading" />

        <DatNumber path="metalness" min={0} max={1} step={0.01} label="金属度metalness" />
        <DatNumber path="roughness" min={0} max={1} step={0.01} label="粗糙度roughness" />
        <DatNumber path="x" min={0} max={20} step={0.001} />
        <DatNumber path="y" min={0} max={20} step={0.001} />
        <DatNumber path="z" min={0} max={20} step={0.001} />
        <DatNumber path="maxWidth" min={50} max={500} step={1} />
        <DatNumber path="count" min={100} max={90000} step={10} />

        <DatSelect
          path="textAlign"
          options={["left", "center", "right", "justify"]}
        />
        <DatSelect
          path="materialType"
          label="material"
          options={["MeshBasicMaterial", "MeshPhongMaterial"]}
        />
        <DatColor path="color" /> */}
      </DatGui>

    </div>
  )
}

export default App
