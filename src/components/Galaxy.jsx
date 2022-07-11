import { useState, useRef,useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function Galaxy({opts}) {
 
  function ramdomPoints(l){//maath库的用法
    return random.inSphere(new Float32Array(l), { radius: 1.5 })
  }

  const ref = useRef()
  const [sphere,setsphere] = useState(ramdomPoints(opts.count))

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
 
  useEffect(() => {
    // console.log(ref.current.geometry)
    if(ref.current !=null) {
      console.log('开始清内存')
      ref.current.geometry.dispose()
      ref.current.geometry.dispose()
     }
    setsphere(ramdomPoints(opts.count))
  },[opts])
   

  return (
    <>
     <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} >
        <PointMaterial transparent color="#ffa0e0" size={0.01} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group> 
    </>
  )
}

export default Galaxy
