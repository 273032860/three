import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  PerspectiveCamera,
  OrbitControls,
  OrthographicCamera,
  shaderMaterial,
} from '@react-three/drei'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import { extend } from '@react-three/fiber'
import glsl from 'babel-plugin-glsl/macro'

const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.8, 0.2, 1.0), uBig: 0.5 },
  // vertex shader
  glsl`
    varying vec2 vUv;
    uniform float uBig;
    void main() {
      vUv = uv;
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);

      modelPosition.y += sin(modelPosition.x) *uBig;
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      gl_Position = projectionPosition;
    }
  `,
  // fragment shader
  glsl`
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(color, 1.0);
    }
  `
)

extend({ ColorShiftMaterial })

function Shad() {
  const mesh = useRef()

  return (
    <>
      <mesh ref={mesh} rotation={[-Math.PI * 0.5, 0, 0]}>
        <planeBufferGeometry />

        <colorShiftMaterial />
      </mesh>
    </>
  )
}

export default Shad
