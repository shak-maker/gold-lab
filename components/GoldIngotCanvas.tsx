"use client";

import React, { Suspense, useRef } from "react";
// @ts-expect-error - TypeScript server cache issue, package is installed
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Center, Bounds } from "@react-three/drei";
import * as THREE from "three";

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

// Simple loading placeholder
function Loader() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((_state: unknown, delta: number) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 0.4, 0.8]} />
      <meshStandardMaterial 
        color="#FFD700" 
        metalness={0.9} 
        roughness={0.1}
      />
    </mesh>
  );
}

export default function GoldIngotCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, 3, -5]} intensity={0.8} />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#FFD700" />
      
      <Suspense fallback={<Loader />}>
        <GoldIngot />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}

// Preload the model for better performance
useGLTF.preload("/models/scene.gltf");
