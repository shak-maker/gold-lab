"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Bounds, Environment } from "@react-three/drei";
import * as THREE from "three";

// Preload the model immediately when module loads (client-side only)
if (typeof window !== "undefined") {
  useGLTF.preload("/models/scene.gltf");
}

// Gold ingot model component
function GoldIngot() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/scene.gltf");
  
  // Fix materials to ensure they render properly with textures
  React.useEffect(() => {
    if (!scene) return;
    
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        
        materials.forEach((mat) => {
          // Only modify if it's a standard or physical material
          if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
            // Convert to physical material for better gold rendering if needed
            let goldMat = mat;
            if (mat instanceof THREE.MeshStandardMaterial) {
              // Upgrade to physical material for better realism
              const newMat = new THREE.MeshPhysicalMaterial({
                color: mat.color.clone(),
                map: mat.map,
                normalMap: mat.normalMap,
                metalnessMap: mat.metalnessMap,
                roughnessMap: mat.roughnessMap,
                metalness: mat.metalness,
                roughness: mat.roughness,
              });
              goldMat = newMat;
              if (Array.isArray(child.material)) {
                const index = materials.indexOf(mat);
                child.material[index] = newMat;
              } else {
                child.material = newMat;
              }
            }
            
            // Realistic gold color - warmer, richer gold (#D4AF37 is classic gold)
            const isDark = goldMat.color.r < 0.15 && goldMat.color.g < 0.15 && goldMat.color.b < 0.15;
            if (!goldMat.map || isDark) {
              // Use a more realistic gold color (warmer, richer)
              goldMat.color.setRGB(0.831, 0.686, 0.216); // #D4AF37 - classic gold
            } else {
              // Enhance existing color to be more gold-like
              goldMat.color.multiplyScalar(1.2);
              goldMat.color.r = Math.min(goldMat.color.r * 1.1, 1.0);
              goldMat.color.g = Math.min(goldMat.color.g * 0.95, 1.0);
            }
            
            // Realistic gold material properties
            goldMat.metalness = 0.98; // Very high metalness for gold
            goldMat.roughness = 0.12; // Low roughness for polished gold
            
            // Physical material properties for realistic gold
            if (goldMat instanceof THREE.MeshPhysicalMaterial) {
              goldMat.clearcoat = 0.8; // Slight clearcoat for shine
              goldMat.clearcoatRoughness = 0.05; // Very smooth clearcoat
              goldMat.ior = 0.82; // Gold's index of refraction
              goldMat.transmission = 0; // Opaque
              goldMat.thickness = 0;
            }
            
            // Subtle warm emissive glow (very subtle for realism)
            goldMat.emissive.setRGB(0.1, 0.08, 0.02);
            goldMat.emissiveIntensity = 0.05;
            
            // Ensure visibility
            goldMat.visible = true;
            goldMat.transparent = false;
            
            // Update textures with proper color space
            if (goldMat.map) {
              goldMat.map.colorSpace = THREE.SRGBColorSpace;
              goldMat.map.needsUpdate = true;
            }
            if (goldMat.normalMap) {
              goldMat.normalMap.needsUpdate = true;
            }
            if (goldMat.metalnessMap) {
              goldMat.metalnessMap.needsUpdate = true;
            }
            if (goldMat.roughnessMap) {
              goldMat.roughnessMap.needsUpdate = true;
            }
            
            // Force update
            goldMat.needsUpdate = true;
          }
        });
      }
    });
  }, [scene]);
  
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
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.4
      }}
      style={{ 
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "block"
      }}
      dpr={[1, 2]} // Optimize pixel ratio
      frameloop="always"
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
      onError={(error) => {
        console.error("Canvas error:", error);
      }}
    >
      {/* Natural lighting setup for realistic gold rendering */}
      <ambientLight intensity={1.2} />
      {/* Warm hemisphere light for natural gold appearance */}
      <hemisphereLight intensity={1.0} color="#fff8e1" groundColor="#3d2f1f" />
      
      {/* Main key light - warm and bright */}
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={2.5} 
        color="#fff8e1"
        castShadow 
      />
      {/* Fill light - softer */}
      <directionalLight 
        position={[-4, 6, -4]} 
        intensity={1.2} 
        color="#fff8e1"
      />
      {/* Rim light for edge definition */}
      <directionalLight 
        position={[0, 2, -8]} 
        intensity={1.0} 
        color="#fff8e1"
      />
      
      {/* Warm accent lights to enhance gold color */}
      <pointLight position={[2, 4, 2]} intensity={1.5} color="#ffd54f" />
      <pointLight position={[-2, 4, -2]} intensity={1.2} color="#ffb300" />
      
      {/* Environment for realistic reflections - wrapped in Suspense for safety */}
      <Suspense fallback={null}>
        <Environment 
          preset="sunset" 
          background={false}
          environmentIntensity={1.0}
        />
      </Suspense>
      
      <Suspense fallback={null}>
        <GoldIngot />
      </Suspense>
    </Canvas>
  );
}
