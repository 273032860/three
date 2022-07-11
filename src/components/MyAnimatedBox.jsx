import React, { useState } from 'react'
import { useFrame } from '@react-three/fiber' //将值转换为动画值的钩子
import { useSpring, animated, config } from '@react-spring/three'

function MyAnimatedBox() {
  const [active, setActive] = useState(false)
  const { x } = useSpring({
    scale: active ? 1.5 : 1,
    config: { duration: 1000 },
  }) //config 动画的属性duration过度时间
  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  })
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = Math.sin(clock.getElapsedTime())
  })
  return (
    <animated.mesh ref={myMesh} scale={scale} onClick={() => setActive(!active)}>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </animated.mesh>
  )
}

export default MyAnimatedBox
