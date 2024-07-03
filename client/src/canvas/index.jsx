import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Can from "./Can";
import Shoe from "./Shoe";
import Phone from "./Phone";
import Laptop from "./Laptop";
import Watch from "./Watch";
import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";
import Customizer from "../pages/Cutomizer";

const CanvasModel = ({ component }) => {
  let ComponentToRender;

  switch (component) {
    case "Shirt":
      ComponentToRender = Shirt;
      break;
    case "Can":
      ComponentToRender = Can;
      break;
    case "Shoe":
      ComponentToRender = Shoe;
      break;
    case "Phone":
      ComponentToRender = Phone;
      break;
    case "Laptop":
      ComponentToRender = Laptop;
      break;
    case "Watch":
      ComponentToRender = Watch;
      break;
    default:
      ComponentToRender = null;
  }

  return (
    <div className="w-full h-full app transition-all ease-in">
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full max-w-full transition-all duration-500 ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <BackDrop />
          <Center>{ComponentToRender && <ComponentToRender />}</Center>
        </CameraRig>
      </Canvas>
      <Customizer />
    </div>
  );
};

export default CanvasModel;
