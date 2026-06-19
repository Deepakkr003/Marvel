"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

export default function StarField({ count = 2000 }) {
  const mesh = useRef(null);

  const particles = useMemo(() => {
    const temp = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;

      // Spread mostly in background
      const z = (Math.random() - 0.5) * 50 - 20;

      temp.push(x, y, z);
    }

    return new Float32Array(temp);
  }, [count]);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.z += delta * 0.02;
      mesh.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.15}
        color="#ffffff"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}