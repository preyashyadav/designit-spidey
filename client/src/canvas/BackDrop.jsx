import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
const BackDrop = () => {
  const shadows = useRef();

  return (
    <>
      {/* <AccumulativeShadows
        position={[0, 0, -0.14]}
        ref={shadows}
        temporal
        frames={60}
        alphaTest={0.85}
        scale={500}
        rotation={[0, 0, 0]}
      >
        <RandomizedLight
          amount={4}
          radius={9}
          intensity={0.55}
          ambient={0.25}
          position={[5, 5, -10]}
        />

        <RandomizedLight
          amount={4}
          radius={5}
          intensity={0.25}
          ambient={1}
          position={[-5, 5, -9]}
        />
      </AccumulativeShadows> */}
    </>
  );
};

export default BackDrop;
