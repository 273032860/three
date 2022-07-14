import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {
  PerspectiveCamera,
  OrbitControls,
  OrthographicCamera,
} from '@react-three/drei'
import { BufferAttribute } from 'three'
import * as THREE from 'three'
import Snipaste from '../image/Snipaste.png'
import DatGui, {
  DatColor,
  DatNumber,
  DatSelect,
  DatBoolean,
} from 'react-dat-gui'

function DatMaterial({ opts }) {
  const mesh = useRef()
  const cref = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    const a = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(a)
    mesh.current.rotation.x = Math.cos(a)
  })

  //形状
  // 'BoxGeometry','CapsuleGeometry','CircleGeometry','ConeGeometry','CylinderGeometry','DodecahedronGeometry','EdgesGeometry','ExtrudeGeometry','IcosahedronGeometry','LatheGeometry','LineBasicMaterial','OctahedronGeometry','PlaneGeometry','PolyhedronGeometry','RingGeometry','ShapeGeometry','SphereGeometry','TetrahedronGeometry','TorusGeometry','TorusKnotGeometry','TubeGeometry','WireframeGeometry'
  if (opts.geometry == 'BoxGeometry') {
    var geometry1 = new THREE.BoxGeometry()
  } else if (opts.geometry == 'CapsuleGeometry') {
    var geometry1 = new THREE.CapsuleGeometry()
  } else if (opts.geometry == 'CircleGeometry') {
    var geometry1 = new THREE.CircleGeometry()
  } else if (opts.geometry == 'ConeGeometry') {
    var geometry1 = new THREE.ConeGeometry()
  } else if (opts.geometry == 'CylinderGeometry') {
    var geometry1 = new THREE.CylinderGeometry()
  } else if (opts.geometry == 'DodecahedronGeometry') {
    var geometry1 = new THREE.DodecahedronGeometry()
  } else if (opts.geometry == 'EdgesGeometry') {
    var geometry1 = new THREE.EdgesGeometry()
  } else if (opts.geometry == 'ExtrudeGeometry') {
    var geometry1 = new THREE.ExtrudeGeometry()
  } else if (opts.geometry == 'IcosahedronGeometry') {
    var geometry1 = new THREE.IcosahedronGeometry()
  } else if (opts.geometry == 'LatheGeometry') {
    var geometry1 = new THREE.LatheGeometry()
  } else if (opts.geometry == 'LineBasicMaterial') {
    var geometry1 = new THREE.LineBasicMaterial()
  } else if (opts.geometry == 'OctahedronGeometry') {
    var geometry1 = new THREE.OctahedronGeometry()
  } else if (opts.geometry == 'PlaneGeometry') {
    var geometry1 = new THREE.PlaneGeometry()
  } else if (opts.geometry == 'PolyhedronGeometry') {
    var geometry1 = new THREE.PolyhedronGeometry()
  } else if (opts.geometry == 'RingGeometry') {
    var geometry1 = new THREE.RingGeometry()
  } else if (opts.geometry == 'ShapeGeometry') {
    var geometry1 = new THREE.ShapeGeometry()
  } else if (opts.geometry == 'SphereGeometry') {
    var geometry1 = new THREE.SphereGeometry()
  } else if (opts.geometry == 'TetrahedronGeometry') {
    var geometry1 = new THREE.TetrahedronGeometry()
  } else if (opts.geometry == 'TorusGeometry') {
    var geometry1 = new THREE.TorusGeometry()
  } else if (opts.geometry == 'TorusKnotGeometry') {
    var geometry1 = new THREE.TorusKnotGeometry()
  } else if (opts.geometry == 'TubeGeometry') {
    var geometry1 = new THREE.TubeGeometry()
  } else if (opts.geometry == 'WireframeGeometry') {
    var geometry1 = new THREE.WireframeGeometry()
  }

  //材质
  // ['MeshBasicMaterial','MeshDepthMaterial','MeshDistanceMaterial','MeshLambertMaterial','MeshMatcapMaterial','MeshNormalMaterial','MeshPhongMaterial','MeshPhysicalMaterial','MeshStandardMaterial','MeshToonMaterial']
  // 'LineBasicMaterial','LineDashedMaterial','PointsMaterial','RawShaderMaterial','ShaderMaterial','ShadowMaterial','SpriteMaterial'
  if (opts.material == 'MeshBasicMaterial') {
    var material1 = new THREE.MeshBasicMaterial()
  } else if (opts.material == 'MeshBasicMaterial') {
    var material1 = new THREE.MeshDepthMaterial()
  } else if (opts.material == 'MeshDistanceMaterial') {
    var material1 = new THREE.MeshDistanceMaterial()
  } else if (opts.material == 'MeshLambertMaterial') {
    var material1 = new THREE.MeshLambertMaterial()
  } else if (opts.material == 'MeshMatcapMaterial') {
    var material1 = new THREE.MeshMatcapMaterial()
  } else if (opts.material == 'MeshNormalMaterial') {
    var material1 = new THREE.MeshNormalMaterial()
  } else if (opts.material == 'MeshPhongMaterial') {
    var material1 = new THREE.MeshPhongMaterial()
  } else if (opts.material == 'MeshPhysicalMaterial') {
    var material1 = new THREE.MeshPhysicalMaterial()
  } else if (opts.material == 'MeshStandardMaterial') {
    var material1 = new THREE.MeshStandardMaterial()
  } else if (opts.material == 'MeshToonMaterial') {
    var material1 = new THREE.MeshToonMaterial()
  } else if (opts.material == 'LineBasicMaterial') {
    var material1 = new THREE.LineBasicMaterial()
  } else if (opts.material == 'LineDashedMaterial') {
    var material1 = new THREE.LineDashedMaterial()
  } else if (opts.material == 'PointsMaterial') {
    var material1 = new THREE.PointsMaterial()
  } else if (opts.material == 'ShaderMaterial') {
    var material1 = new THREE.ShaderMaterial()
  } else if (opts.material == 'ShadowMaterial') {
    var material1 = new THREE.ShadowMaterial()
  }

  const texture = useLoader(THREE.TextureLoader, Snipaste)

  const geometry = new THREE.BoxGeometry()

  return (
    <>
      <group dispose={null}>
        <mesh
          position={[opts.x, opts.y, opts.z]}
          ref={mesh}
          scale={active ? 1.5 : 1}
          onClick={(event) => setActive(!active)}>
          <primitive attach="geometry" object={geometry1} />
          <primitive
            attach="material"
            object={material1}
            color={opts.color}
            map={opts.materialMap ? texture : null}
            wireframe={opts.wireframe ? true : false}
            transparent
            opacity={opts.opacity}
            alphaMap={opts.materialAlphaMap ? texture : null}
            side={opts.materialSide ? THREE.DoubleSide : null}
            flatShading={opts.flatShading ? true : false}
            metalness={opts.metalness}
            roughness={opts.roughness}
            shininess={100}
            specular="blue"
          />
        </mesh>
      </group>
      <pointLight />
    </>
  )
}

export default DatMaterial
