import React from "react";
import { useMacBookStore } from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14";
import StudioLights from "./StudioLights";
const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacBookStore();

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        <p className="info">MacBookPro 16" in {color}</p>
        <div className="flex-center gap-5 mt-5">
          {/* color control */}
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#adb5bd" && "active"
              )}
            />
          </div>
          {/* size control */}
          <div className="size-control flex gap-3">
            {/* 14 inch */}
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              14"
            </div>

            {/* 16 inch */}
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              16"
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        {/* 3D model will be rendered here */}
        {/* <Box position={[0, 0, 0]} scale={10 * scale} material-color={color} /> */}
        <StudioLights />
        <MacbookModel14 scale={0.06} position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
