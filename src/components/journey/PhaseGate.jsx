"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function PhaseGate({
  position,
  title,
  subtitle,
  active,
  imageUrl,
  size = 1,
  mode = "cover",
}) {
  const ringRef = useRef(null);
  const glowMatRef = useRef(null);
  const ringMatRef = useRef(null);

  // Geometries (base size, we'll scale the whole group)
  const ringGeo = useMemo(
    () => new THREE.RingGeometry(10, 12, 128),
    []
  );

  const glowGeo = useMemo(
    () => new THREE.RingGeometry(12, 18, 128),
    []
  );

  const discGeo = useMemo(
    () => new THREE.CircleGeometry(9.6, 128),
    []
  );

  // texture (optional)
  const tex = useTexture(imageUrl ?? "/journey/unsorted.jpg");

  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;

  // visibility factor (always slightly visible)
  const base = 0.28;
  const a = THREE.MathUtils.clamp(
    base + active * (1 - base),
    0,
    1
  );

  // Fit image into the circle (cover/contain)
  const repeatOffset = useMemo(() => {
    let repX = 1,
      repY = 1,
      offX = 0,
      offY = 0;

    const img = tex.image;
    const iw = img?.width ?? 1;
    const ih = img?.height ?? 1;

    const imgAspect = iw / ih;

    // circle "viewport" aspect = 1 (square uv area)
    // We achieve cover/contain by adjusting texture.repeat and texture.offset.
    if (mode === "cover") {
      if (imgAspect > 1) {
        // wide image: zoom in X
        repX = 1 / imgAspect;
        repY = 1;
        offX = (1 - repX) / 2;
      } else {
        // tall image: zoom in Y
        repX = 1;
        repY = imgAspect;
        offY = (1 - repY) / 2;
      }
    } else {
      // contain
      if (imgAspect > 1) {
        // wide: fit width, reduce Y
        repX = 1;
        repY = imgAspect;
        offY = (1 - repY) / 2;
      } else {
        // tall: fit height, reduce X
        repX = 1 / imgAspect;
        repY = 1;
        offX = (1 - repX) / 2;
      }
    }

    return { repX, repY, offX, offY };
  }, [tex, mode]);

  // apply repeat/offset once texture loads
  useMemo(() => {
    tex.repeat.set(
      repeatOffset.repX,
      repeatOffset.repY
    );

    tex.offset.set(
      repeatOffset.offX,
      repeatOffset.offY
    );

    tex.needsUpdate = true;
  }, [tex, repeatOffset]);

  useFrame(() => {
    if (ringRef.current)
      ringRef.current.rotation.z += 0.004;

    if (glowMatRef.current)
      glowMatRef.current.opacity = 0.22 * a;

    if (ringMatRef.current)
      ringMatRef.current.opacity = 0.7 * a;
  });

  return (
    <group position={position} scale={[size, size, size]}
    >
      {/* Outer glow */}
      <mesh>
        <primitive object={glowGeo} attach="geometry"
        />

        <meshBasicMaterial ref={glowMatRef} color="#ff4fd8" transparent opacity={0.22 * a} depthWrite={false} blending={THREE.AdditiveBlending} side={THREE.DoubleSide}
        />
      </mesh>

      {/* Portal ring */}
      <mesh ref={ringRef}>
        <primitive object={ringGeo} attach="geometry"
        />

        <meshBasicMaterial ref={ringMatRef} color="#b66bff" transparent opacity={0.7 * a} depthWrite={false} blending={THREE.AdditiveBlending} side={THREE.DoubleSide}
        />
      </mesh>

      {/* Portal "screen" (circular masked image) */}
      <mesh position={[0, 0, -0.02]}>
        <primitive object={discGeo} attach="geometry"
        />

        <meshBasicMaterial map={tex} transparent opacity={1.95 * a} depthWrite={false} toneMapped={false} color={new THREE.Color(
            0.95,
            0.95,
            0.98
          )}
        />
      </mesh>

      {/* subtle inner vignette */}
      <mesh position={[0, 0, -0.01]}>
        <primitive object={discGeo} attach="geometry"
        />

        <meshBasicMaterial color="#000000" transparent opacity={0.18 * a} depthWrite={false}
        />
      </mesh>

      {/* Title text (bigger + brighter) */}
      <group position={[0, 14.5, 0]}>
        <Text fontSize={2.8} color="white" anchorX="center" anchorY="middle" outlineWidth={0.08} outlineColor="#000" fillOpacity={1 * a}
        >
          {title.toUpperCase()}
        </Text>

        <Text position={[0, -3.0, 0]} fontSize={1.0} color="#ffffff" anchorX="center" anchorY="middle" maxWidth={34} textAlign="center" outlineWidth={0.03} outlineColor="#000" fillOpacity={0.85 * a}
        >
          {subtitle}
        </Text>
      </group>
    </group>
  );
}