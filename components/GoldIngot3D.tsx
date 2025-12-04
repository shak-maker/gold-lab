"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the 3D component to avoid SSR issues
const GoldIngotCanvas = dynamic(() => import("./GoldIngotCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded animate-pulse" />
    </div>
  ),
});

export function GoldIngot3D() {
  return (
    <div className="w-full h-full relative min-h-[350px]">
      {/* Glow effect behind */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 215, 0, 0.45) 0%, rgba(247, 195, 49, 0.2) 35%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-32 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded animate-pulse" />
        </div>
      }>
        <GoldIngotCanvas />
      </Suspense>
    </div>
  );
}

