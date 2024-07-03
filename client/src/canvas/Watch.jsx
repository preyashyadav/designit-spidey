import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";

const Watch = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("watch_preyash6.glb");
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    // easing.dampC(materials.material_low.color, snap.color, 0.25, delta);
    easing.dampC(materials.Rubber.color, snap.color, 0.25, delta);
  });

  const stateString = JSON.stringify(snap);
  return (
    <group
      key={stateString}
      rotation={[Math.PI / 2, Math.PI / 2, -Math.PI / 2]}
      scale={0.006}
      position={[0, 0, 0]}
    >
      <mesh
        castShadow
        geometry={nodes.Strap_Rubber_0.geometry}
        material={materials.Rubber}
        dispose={null}
        material-roughness={1}
        scale={snap.scale}
      >
        {snap.isFullTexture && fullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={120}
            map={fullTexture}
          />
        )}
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Case_IronClean_0.geometry}
        material={materials.Iron_Clean}
        dispose={null}
        scale={snap.scale}
      ></mesh>

      <mesh
        castShadow
        geometry={nodes.Glass_GlassClear_0.geometry}
        material={materials.Glass_Clear}
        dispose={null}
        scale={snap.scale}
      ></mesh>

      <mesh
        castShadow
        geometry={nodes.Screen_Screen1_0.geometry}
        material={materials.Screen_1}
        dispose={null}
      ></mesh>

      <mesh
        castShadow
        geometry={nodes.Backcover_GlassClear2_0.geometry}
        material={materials.Glass_Clear2}
        dispose={null}
      ></mesh>

      <mesh
        geometry={nodes.Case2_BlackGlossyTEXT_0.geometry}
        material={materials.Black_Glossy_TEXT}
      ></mesh>

      <mesh
        geometry={nodes.Case2_BlackGlossy_0.geometry}
        material={materials.Black_Glossy}
      ></mesh>

      <mesh
        geometry={nodes.Button_IronClean_0.geometry}
        material={materials.Iron_Clean}
      ></mesh>

      <mesh
        geometry={nodes.Rivet_IronClean2_0.geometry}
        material={materials.Iron_Clean2}
      ></mesh>

      <mesh
        geometry={nodes.Case2_BlackGlossy_0.geometry}
        material={materials.Black_Glossy}
      ></mesh>

      <mesh
        geometry={nodes.Case2_BlackGlossy_0.geometry}
        material={materials.Black_Glossy}
      ></mesh>

      <mesh
        geometry={nodes.Case2_BlackGlossy_0.geometry}
        material={materials.Black_Glossy}
      ></mesh>
    </group>
  );
};

export default Watch;
