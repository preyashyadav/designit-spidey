import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";

const Laptop = () => {
  //   const snap = useSnapshot(state);
  //   const { nodes, materials } = useGLTF("laptop_preyash.glb");
  //   const logoTexture = useTexture(snap.logoDecal);
  //   const fullTexture = useTexture(snap.fullDecal);

  //   useFrame((state, delta) => {
  //     if (materials.case) {
  //       easing.dampC(materials.case.color, snap.color, 0.25, delta);
  //     }
  //   });

//   const stateString = JSON.stringify(snap);
  return (
    <></>
    // <group
    //   key={stateString}
    //   rotation={[-Math.PI / 2, Math.PI / 2, Math.PI / 2]}
    //   scale={0.025}
    //   position={[0, 0, 0]}
    // >
    //   <mesh
    //     castShadow
    //     geometry={nodes.case.geometry}
    //     material={materials.case}
    //     dispose={null}
    //     scale={snap.scale}
    //   >
    //     {snap.isFullTexture && fullTexture && (
    //       <Decal
    //         position={[0, 5, 6]}
    //         rotation={[-Math.PI / 2, 0, -Math.PI]}
    //         scale={50}
    //         map={fullTexture}
    //       />
    //     )}
    //   </mesh>
    //   <mesh
    //     castShadow
    //     geometry={nodes.display.geometry}
    //     material={materials.display}
    //     dispose={null}
    //   >
    //     {snap.isFullTexture && fullTexture && (
    //       <Decal
    //         position={[0, 5, 6]}
    //         rotation={[-Math.PI / 2, 0, -Math.PI]}
    //         scale={50}
    //         map={fullTexture}
    //       />
    //     )}
    //   </mesh>
    // </group>
  );
};

export default Laptop;
