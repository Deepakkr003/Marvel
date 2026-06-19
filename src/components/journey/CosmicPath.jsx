"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// A single strand of the timeline
function TimeStrand({
  curve,
  offset,
  opacity,
  width,
  speed,
}) {
  const materialRef = useRef(null);

  // Create a slightly offset curve for this strand to give volume/chaos
  const strandCurve = useMemo(() => {
    // We can't easily offset a 3D curve perfectly without complex math,
    // but we can jitter the points slightly if we had access to them.
    // Since we only have the curve object here, we'll use the tube geometry directly
    // but strictly speaking, distinct curves would be better.
    // For performance/simplicity, we render the same curve but with a larger/smaller radius
    // and maybe a slight position offset in the group if we wanted.

    // Actually, let's just use the TubeGeometry with different radii.
    return new THREE.TubeGeometry(
      curve,
      240,
      width,
      8,
      false
    );
  }, [curve, width]);

  useFrame((state) => {
    if (!materialRef.current) return;

    const time = state.clock.elapsedTime;

    materialRef.current.opacity =
      THREE.MathUtils.clamp(
        opacity +
          Math.sin(time * speed + offset) * 0.1,
        0,
        1
      );
  });

  return (
    <mesh geometry={strandCurve}>
      <meshBasicMaterial
        ref={materialRef}
        color="#ec4899" // Pink/Purple for "Sacred Timeline" or "Multiverse" feel
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export function CosmicPath({ curve }) {
  return (
    <group>
      {/* Core hot beam */}
      <TimeStrand
        curve={curve}
        width={0.15}
        opacity={0.9}
        offset={0}
        speed={2}
      />

      {/* Outer glow 1 */}
      <TimeStrand
        curve={curve}
        width={0.4}
        opacity={0.4}
        offset={1}
        speed={1.5}
      />

      {/* Outer glow 2 */}
      <TimeStrand
        curve={curve}
        width={0.8}
        opacity={0.15}
        offset={2}
        speed={1}
      />

      {/* A second color strand for complexity (Blue/Cyan mixed with Red/Pink) */}
      <mesh>
        <tubeGeometry
          args={[curve, 600, 0.3, 8, false]}
        />

        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export function CosmicPathGlow({ curve }) {
  // Just a large faint aura
  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(
      curve,
      200,
      2,
      8,
      false
    );
  }, [curve]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        color="#8b5cf6"
        transparent
        opacity={0.03}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}