import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Font({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/font.glb");
  return (
    <group ref={group} {...props} dispose={null} >
      <group
        position={[0.4, 0.48, -0.09]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-1.89, -12.27, -1.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.文本001.geometry}
          material={materials["材质.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.文本001_1.geometry}
          material={materials.材质}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.文本001_2.geometry}
          material={materials["材质.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.文本001_3.geometry}
          material={materials["材质.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/font.glb");