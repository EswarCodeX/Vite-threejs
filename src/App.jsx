import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Color } from "three";
import RotatingCube from "./Components/rotatingcube";
import Car from "./Components/Car";
import CanvasLoader from "./Components/CanvasLoader";
import { Leva, useControls } from "Leva";

export default function App() {
  const controls = useControls("Car", {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 1,
      min: 0,
      max: 10,
    },
  });
  return (
    <>
      {" "}
      <Leva />
      <Canvas
        style={{
          height: "100vh",
          width: "full",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <perspectiveCamera makeDefault position={[0, 0, 30]} />
          <Car
            position={[
              controls.positionX,
              controls.positionY,
              controls.positionZ,
            ]}
            scale={[controls.scale, controls.scale, controls.scale]}
            rotation={[
              controls.rotationX,
              controls.rotationY,
              controls.rotationZ,
            ]}
          />

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
        </Suspense>
      </Canvas>
    </>
  );
}
