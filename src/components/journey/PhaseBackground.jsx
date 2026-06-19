"use client";

import { Image, Text } from "@react-three/drei";
import * as THREE from "three";

export default function PhaseBackground({
  position,
  imageUrl,
  title,
  subtitle,
  active,
}) {
  // fade range
  const a = THREE.MathUtils.clamp(active, 0, 1);

  // if far away, don't render at all (performance)
  if (a < 0.02) return null;

  return (
    <group position={position} rotation={[0, Math.PI / 10, 0]}
    >
      {/* Poster */}
      <Image url={imageUrl} scale={[70, 45]} transparent opacity={0.22 * a} // fade in grayscale={0.45} toneMapped={false}
      />

      {/* Title */}
      <Text position={[0, 16, 0.2]} fontSize={5} color="white" anchorX="center" anchorY="middle" outlineWidth={0.06} outlineColor="#000" fillOpacity={0.95 * a}
      >
        {title.toUpperCase()}
      </Text>

      {/* Subtitle */}
      <Text position={[0, 11, 0.2]} fontSize={1.4} color="#ffffffcc" anchorX="center" anchorY="middle" maxWidth={28} textAlign="center" fillOpacity={0.85 * a}
      >
        {subtitle}
      </Text>
    </group>
  );
}