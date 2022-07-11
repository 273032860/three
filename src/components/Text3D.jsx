import React,{useState,useRef} from 'react'
import { extend,useFrame } from '@react-three/fiber'
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import myfont from '../font/helvetiker_regular.typeface.json'
import { TextGeometry } from 'three-stdlib'

extend({ TextGeometry })


const text =
  `Lorem ipsum dolor sit amet,\t
   consectetur adipiscing elit `
 
    

function Text3D() { 
  const mesh = useRef()
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    const a = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(a) // 转圈
    mesh.current.rotation.x = Math.cos(a)
  })
  
  const font = new FontLoader().parse(myfont);
  
  return (
    <>  
      <mesh ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}>
      <textGeometry  args={[text,{font,size:1,height:1}]} />
        <meshNormalMaterial />

      </mesh>   
    </>
  )
}

export default Text3D
