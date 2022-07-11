import React, { useRef,useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated,config } from '@react-spring/three' 
import { useFrame } from '@react-three/fiber'   //将值转换为动画值的钩子

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mu5.glb");

  const [active,setActive] = useState(false)
  const springs = useSpring({ scale: active ? -0.5 :   -0.46,config: { duration: 1000 }, })//config 动画的属性duration过度时间
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.x=Math.sin(clock.getElapsedTime())
    myMesh.current.rotation.y=Math.sin(clock.getElapsedTime())
    console.log(springs)
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-3.58, 0.66, 4.24]} scale={0.37}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体006.geometry}
          material={materials.栏杆柱}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体006_1.geometry}
          material={materials["材质.004"]}
        />
      </group>
      <group position={[-2.43, 0.67, 1.79]} scale={0.37}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体023.geometry}
          material={materials.栏杆柱}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体023_1.geometry}
          material={materials["材质.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.柱体005.geometry}
        material={materials.栏杆柱}
        position={[2.08, 0.71, 4.25]}
        rotation={[0, -0.68, 0]}
        scale={[0.18, 0.43, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.柱体007.geometry}
        material={materials.栏杆柱}
        position={[3.23, 0.71, 3.08]}
        rotation={[0, -0.68, 0]}
        scale={[0.18, 0.43, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.柱体008.geometry}
        material={materials.栏杆柱}
        position={[4.31, 0.71, 1.98]}
        rotation={[0, -0.68, 0]}
        scale={[0.18, 0.43, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.贝塞尔曲线.geometry}
        material={materials["材质.001"]}
        position={[2.09, 1.46, 4.24]}
        rotation={[0, -0.68, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.贝塞尔曲线002.geometry}
        material={materials.地块}
        position={[-5.08, 0.28, -0.61]}
      />
      <group position={[-5.08, 0.28, -0.61]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004.geometry}
          material={materials.地面}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004_1.geometry}
          material={materials["材质.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球体002.geometry}
        material={materials.岩石}
        position={[1.74, -0.22, -3.61]}
        ref={myMesh} onClick={() => setActive(!active)}
        scale={active ? -0.5 :   -0.46}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.球体003.geometry}
        material={materials.岩石}
        position={[1.49, 0.23, -2.92]}
        rotation={[0.76, 0.86, -0.62]}
        scale={-0.28}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面001.geometry}
        material={materials.外墙}
        position={[0, 0.19, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.平面002.geometry}
          material={materials.栏杆柱}
          position={[1.08, 0.57, -2.41]}
        >
          <mesh
         
            castShadow
            receiveShadow
            geometry={nodes.柱体006_2.geometry}
            material={nodes.柱体006_2.material}
            position={[-0.02, -0.03, 0.78]}
            rotation={[Math.PI / 2, 0, -1.57]}
          />
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面003.geometry}
        material={materials.屋顶}
        position={[0, 0.08, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面005.geometry}
        material={materials["材质.003"]}
        position={[0, 0.19, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面007.geometry}
        material={materials["材质.003"]}
        position={[0, 0.19, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面008.geometry}
        material={materials["材质.003"]}
        position={[0, 0.19, 0]}
      />
      <group position={[1.14, 3.11, -1.99]} rotation={[-1.56, 0.01, 1.57]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体016_1.geometry}
          material={materials["材质.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体016_2.geometry}
          material={materials.窗}
        />
      </group>
      <group position={[1.13, 1.21, -0.03]} rotation={[-1.56, -0.01, 1.57]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体017.geometry}
          material={materials["材质.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体017_1.geometry}
          material={materials.窗}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.柱体012.geometry}
        material={nodes.柱体012.material}
        position={[0.07, 1.15, 1.05]}
        rotation={[-1.53, 0.01, 3.14]}
      />
      <group position={[-1.14, 3.09, -1.86]} rotation={[1.92, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体020.geometry}
          material={materials["材质.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体020_1.geometry}
          material={materials.窗}
        />
      </group>
      <group position={[-1.17, 1.41, 0.08]} rotation={[1.92, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体021.geometry}
          material={materials["材质.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体021_1.geometry}
          material={materials.窗}
        />
      </group>
      <group position={[0.01, 1.39, 1.09]} rotation={[-1.58, -0.01, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体022.geometry}
          material={materials["材质.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.柱体022_1.geometry}
          material={materials.窗}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体.geometry}
        material={materials.屋顶}
        position={[-1.14, 2.81, 0.13]}
        rotation={[0.01, -0.01, -0.08]}
        scale={0.78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体001.geometry}
        material={materials.屋顶}
        position={[0.02, 4.21, -1.77]}
        rotation={[1.94, -1.56, Math.PI / 2]}
        scale={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体002.geometry}
        material={materials.屋顶}
        position={[0.03, 4.19, -2.18]}
        rotation={[-1.91, 1.56, -1.57]}
        scale={-0.8}
      />
    </group>
  );
}

useGLTF.preload("/mu5.glb");