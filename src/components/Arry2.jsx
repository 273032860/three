import React, { useRef, useState } from 'react'

function Arry() {
  const count = 50
  const positionArray = new Float32Array(count * 3 * 3)
  for (let i = 0; i < count * 3 * 3; i++) {
    positionArray[i] = Math.random()
  }

  return (
    <>
      <mesh>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            array={positionArray}
            itemSize={3}
            count={count}
          />
        </bufferGeometry>
        <pointsMaterial color="red" wireframe />
      </mesh>
    </>
  )
}

export default Arry
