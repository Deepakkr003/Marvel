"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Image, Text } from "@react-three/drei";
import * as THREE from "three";

export default function MovieNode({
  title,
  position,
  status,
  onClick,
}) {
  const groupRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const isLocked = status === "locked";
  const base = hovered && !isLocked ? 1.25 : hovered ? 1.05 : 1;

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.lookAt(state.camera.position);

    let s = base;

    if (status === "next") {
      const t = state.clock.getElapsedTime();
      s *= 1 + Math.sin(t * 3) * 0.05;
    }

    const current = groupRef.current.scale.x;
    const next = THREE.MathUtils.lerp(current, s, 0.15);

    groupRef.current.scale.set(next, next, next);
  });

  const grayscale = isLocked ? 1 : 0;

  // Locked nodes are darker/transparent
  const opacity = isLocked ? 0.3 : 1;

  // Enhance scale on hover
  const hoverScale =
    hovered && !isLocked ? 1.25 : hovered ? 1.05 : 1;

  // Glow color based on status
  const glowColor =
    status === "watched"
      ? "#10b981"
      : status === "next"
      ? "#ef4444"
      : "white";

  const showGlow =
    status === "watched" || status === "next";

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick(title);
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Poster Image */}
      <Image url={title.posterSrc} transparent opacity={opacity} scale={[3, 4.5]} grayscale={grayscale}
      />

      {/* Frame / Border */}
      <mesh position={[0, 0, -0.05]}>
        <planeGeometry args={[3.2, 4.7]} />
        <meshBasicMaterial color={isLocked ? "#1a1a1a" : "#000"} />
      </mesh>

      {/* Solar System / Orbit Rings */}
      {/* Ring 1 - Static */}
      <mesh position={[0, 0, -0.08]}>
        <ringGeometry args={[2.5, 2.55, 32]} />
        <meshBasicMaterial color={glowColor} transparent opacity={opacity * 0.3} side={THREE.DoubleSide}
        />
      </mesh>

      {/* Ring 2 - Animated/Thicker for active/next */}
      {showGlow && (
        <group>
          <mesh position={[0, 0, -0.1]}>
            <ringGeometry args={[3.0, 3.08, 64]} />
            <meshBasicMaterial color={glowColor} transparent opacity={0.6} side={THREE.DoubleSide}
            />
          </mesh>

          {/* Dashed outer orbit */}
          <mesh
            position={[0, 0, -0.12]}
            rotation={[0, 0, Math.PI / 4]}
          >
            <ringGeometry args={[3.8, 3.82, 64]} />
            <meshBasicMaterial color={glowColor} transparent opacity={0.2} side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      )}

      {/* "Level Completed" or Status Indicator */}
      {status === "watched" && (
        <group position={[0, 3.2, 0]}>
          <Text fontSize={0.3} color="#10b981" anchorX="center" anchorY="middle" outlineWidth={0.05} outlineColor="black"
          >
            LEVEL CLEARED
          </Text>

          <Text position={[0, -0.5, 0]} fontSize={0.6} color="#10b981" anchorX="center" anchorY="middle"
          >
            ✓
          </Text>
        </group>
      )}

      {/* "Next Level" Indicator */}
      {status === "next" && (
        <group position={[0, 3.2, 0]}>
          <Text fontSize={0.3} color="#ef4444" anchorX="center" anchorY="middle" outlineWidth={0.05} outlineColor="black"
          >
            CURRENT MISSION
          </Text>
        </group>
      )}

      {/* Title Text on Hover */}
      {hovered && (
        <Text position={[0, -2.8, 0]} fontSize={0.4} color="white" anchorX="center" anchorY="top" maxWidth={3.5} textAlign="center" outlineWidth={0.02} outlineColor="#000"
        >
          {title.name}
        </Text>
      )}
    </group>
  );
}