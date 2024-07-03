import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";

const Phone = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/phonecase_preyash.glb");
  // const { nodes, materials } = useGLTF("/hoodie.glb");
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  const title = snap.titleDecal;

  useFrame((state, delta) => {
    // Update rotation based on delta time
    easing.dampC(materials.initialShadingGroup.color, snap.color, 0.25, delta);
  });

  const stateString = JSON.stringify(snap);
  return (
    <group
      key={stateString}
      //   rotation={[Math.PI, Math.PI / 2, -Math.PI / 2]}
      rotation={[-Math.PI / 2, 0, Math.PI]}
      position={[0, 0, 0]}
    >
      <mesh
        castShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        material-roughness={1}
        dispose={null}
        scale={0.05}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 5, 6]}
            rotation={[-Math.PI / 2, 0, -Math.PI]} //rotation of texture
            // scale={!snap.value ? 0.5 : snap.value / 50}
            scale={16}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0.25, 0.2, 6]}
            rotation={[10, 0, Math.PI]} //rotation of logo
            scale={3}
            map={logoTexture}
            // map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}

        {snap.isTitle && (
          <Decal
            position={[0, 0.15, -0.1]}
            scale={0.15}
            value={title}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Phone;
