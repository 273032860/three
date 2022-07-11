import { useState, useRef,useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function Galaxy2({opts}) {
 
  function ramdomPoints(l){//maath库的用法
    return random.inSphere(new Float32Array(l), { radius: 1.5 })
  }

  const ref = useRef()
  const [sphere,setsphere] = useState(ramdomPoints(opts.count))



  useFrame((state, delta) => {
    const a = state.clock.getElapsedTime()
    for (let i = 0; i < opts.count; i++) {
      const i3 = i * 3
      const radius = Math.random()* 4
      const branch = i % opts.branch /opts.branch*Math.PI*2    
      const spin = radius*opts.spin
      const randomx = Math.pow(Math.random(),opts.randompower) *((Math.random())<0.5?1:-1)
      const randomy = Math.pow(Math.random(),opts.randompower) *((Math.random())<0.5?1:-1)
      const randomz = Math.pow(Math.random(),opts.randompower) *((Math.random())<0.5?1:-1)

      
      // x = radius
      ref.current.geometry.attributes.position.array[i3] =Math.cos(branch+spin)*radius+randomx  //拿到所有粒子的X坐标
      ref.current.geometry.attributes.position.array[i3+1] =randomy
      ref.current.geometry.attributes.position.array[i3+2] =Math.sin(branch+spin)*radius+randomz

    }


  
    




  })
 
  useEffect(() => {
    if(ref.current !=null) {
      console.log('开始清内存')
      ref.current.geometry.dispose()
      ref.current.geometry.dispose()
     }
    setsphere(ramdomPoints(opts.count))
  },[opts])
   

  return (
    <>
     <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} >
        <PointMaterial transparent color="#ffa0e0" size={0.01} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group> 
    </>
  )
}

export default Galaxy2
