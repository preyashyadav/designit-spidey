import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";

const Shoe = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("shoe_preyash2.glb");
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    if (materials.material_low && materials.material_up) {
      // easing.dampC(materials.material_low.color, snap.color, 0.25, delta);
      easing.dampC(materials.material_up.color, snap.color, 0.25, delta);
    }
  });

  const stateString = JSON.stringify(snap);
  return (
    <group
      key={stateString}
      rotation={[-Math.PI / 2, Math.PI / 2, Math.PI / 2]}
      scale={0.025}
      position={[0, 0, 0]}
    >
      <mesh
        castShadow
        geometry={nodes.shoe_low.geometry}
        material={materials.material_low}
        dispose={null}
        scale={snap.scale}
      >
        {snap.isFullTexture && fullTexture && (
          <Decal
            position={[0, 5, 6]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={50}
            map={fullTexture}
          />
        )}
      </mesh>
      <mesh
        castShadow
        geometry={nodes.shoe_up.geometry}
        material={materials.material_up}
        dispose={null}
      >
        {snap.isFullTexture && fullTexture && (
          <Decal
            position={[0, 5, 6]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={0.1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && logoTexture && (
          <Decal
            position={[0, 0.04, 0.1]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shoe;
