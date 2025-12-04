"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Center, Bounds } from "@react-three/drei";
import * as THREE from "three";

// Preload the model immediately when module loads (client-side only)
if (typeof window !== "undefined") {
  useGLTF.preload("/models/scene.gltf");
}

// Gold ingot model component
function GoldIngot() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/scene.gltf");
  
  // Rotate on its own axis (like Earth spinning)
  useFrame((_state: unknown, delta: number) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.4;
    }
  });
  
  return (
    <Bounds fit clip observe margin={1.8}>
      <group ref={modelRef} rotation={[0.2, 0, 0]}>
        <Center>
          {/* Model rotates on its own center axis */}
          <primitive 
            object={scene} 
            scale={2}
          />
        </Center>
      </group>
    </Bounds>
  );
}

export default function GoldIngotCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }}
      style={{ background: "transparent" }}
      dpr={[1, 2]} // Optimize pixel ratio
      frameloop="always"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, 3, -5]} intensity={0.8} />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#FFD700" />
      
      <Suspense fallback={null}>
        <GoldIngot />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
