 

import React, { useRef, useState } from 'react'
import * as THREE from 'three'
 
function Arry() {
  const count = 50
  const positionArray = new Float32Array(count * 3 * 3)
  for (let i = 0; i < count * 3 * 3; i++) {
    positionArray[i] = Math.random()
  }
  let geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3));

  return (
    <>
      <mesh>
        <primitive attach="geometry" object={geometry} />
        <pointsMaterial
          color='red'
          wireframe
        />
      </mesh>
     
    </>
  )
}

export default Arry
