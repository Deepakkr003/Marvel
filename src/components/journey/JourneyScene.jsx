import { useMemo, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, Preload } from "@react-three/drei";
import * as THREE from "three";

import { PHASES } from "../../data/phases";
import DoomsdayReveal from "../DoomsdayReveal";
import NebulaBackground from "./NebulaBackground";
import { CosmicPath, CosmicPathGlow } from "./CosmicPath";
import MovieNode from "./MovieNode";
import PhaseGate from "./PhaseGate";

/* ================= Scene Content ================= */

function SceneContent({
  titles,
  watched,
  currentOrder,
  onNodeClick,
  onLockedClick,
  started,
  layout,
}) {
  const scroll = useScroll();
  const { curve, titlePositions, phaseDecorations } = layout;

  // Camera math helpers
  const worldUp = useMemo(() => new THREE.Vector3(0, 1, 0), []);
  const altUp = useMemo(() => new THREE.Vector3(0, 0, 1), []);

  const tmpTangent = useMemo(() => new THREE.Vector3(), []);
  const tmpNormal = useMemo(() => new THREE.Vector3(), []);
  const tmpBinormal = useMemo(() => new THREE.Vector3(), []);
  const tmpPos = useMemo(() => new THREE.Vector3(), []);

  const didSnapRef = useRef(false);

  useEffect(() => {
    if (!started) {
      didSnapRef.current = false;
    }
  }, [started]);

  /* -------- Camera movement -------- */
  useFrame((state) => {
    if (!started || !curve) return;

    const rawT = scroll.offset;

    if (!Number.isFinite(rawT)) return;

    const t = THREE.MathUtils.clamp(rawT, 0, 1);

    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t);

    if (!point || !tangent) return;

    tmpTangent.copy(tangent).normalize();

    const upVec =
      Math.abs(tmpTangent.dot(worldUp)) > 0.98
        ? altUp
        : worldUp;

    tmpNormal.crossVectors(upVec, tmpTangent).normalize();
    tmpBinormal
      .crossVectors(tmpTangent, tmpNormal)
      .normalize();

    // Start at current curve point
    tmpPos.copy(point);

    // Move camera sideways
    tmpPos.addScaledVector(tmpNormal, 8);

    // Move camera upward
    tmpPos.addScaledVector(tmpBinormal, 4);

    // Move camera backwards
    tmpPos.addScaledVector(tmpTangent, -14);

    // First frame: snap camera instantly
    if (!didSnapRef.current) {
      state.camera.position.copy(tmpPos);
      didSnapRef.current = true;
    } else {
      // Smooth movement
      state.camera.position.lerp(tmpPos, 0.12);
    }

    // Look slightly ahead on the curve
    const lookAt = curve.getPointAt(
      Math.min(t + 0.02, 1)
    );

    if (lookAt) {
      state.camera.lookAt(lookAt);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Always visible background */}
      <NebulaBackground />

      {started && (
        <>
          {/* Sacred timeline beam */}
          <CosmicPath curve={curve} />
          <CosmicPathGlow curve={curve} />

          {/* ---------- Phase Gates ---------- */}
          {phaseDecorations.map((pd) => {
            const dist = Math.abs(
              scroll.offset - pd.u
            );

            const active = THREE.MathUtils.clamp(
              1 - dist / 0.15,
              0,
              1
            );

            return (
              <PhaseGate key={pd.phase.key} position={pd.pos} title={pd.phase.title} subtitle={pd.phase.subtitle} active={active} imageUrl={pd.phase.bg} size={1.25} mode="cover"
              />
            );
          })}

          {/* ---------- Movie Nodes ---------- */}
          {titlePositions.map(({ id, pos }) => {
            const title = titles.find(
              (t) => t.id === id
            );

            if (!title) return null;

            const isWatched = !!watched[title.id];

            let status = "locked";

            if (isWatched) {
              status = "watched";
            } else if (
              title.recommendedOrder === currentOrder
            ) {
              status = "next";
            }

            return (
              <MovieNode key={id} title={title} position={pos} status={status} onClick={(t) =>
                status === "locked"
                  ? onLockedClick()
                  : onNodeClick(t)
                }
              />
            );
          })}

          {/* Final Reveal
          <DoomsdayReveal /> */}
        </>
      )}
    </>
  );
}

/* ================= Main Scene ================= */

export default function JourneyScene(props) {
  const layout = useMemo(() => {
    const pts = [];
    const titlePos = [];
    const phaseDecorations = [];

    // Spiral settings
    const radius = 12;
    const heightStep = 5;
    const angleStep = 0.6;
    const phaseGap = 30;

    let currentZ = 0;
    let currentAngle = 0;

    // Initial points
    pts.push(new THREE.Vector3(0, 0, 10));
    pts.push(new THREE.Vector3(0, 0, 0));

    // Build spiral path
    PHASES.forEach((phase) => {
      const phaseTitles = props.titles.filter(
        phase.filter
      );

      if (!phaseTitles.length) return;

      phaseTitles.forEach(() => {
        currentZ -= heightStep;
        currentAngle += angleStep;

        const x =
          Math.cos(currentAngle) * radius;

        const y =
          Math.sin(currentAngle) * radius * 0.6 +
          Math.sin(currentAngle * 0.8) * 2;

        const p = new THREE.Vector3(
          x,
          y,
          currentZ
        );

        pts.push(p);
      });

      // Gap between phases
      currentZ -= phaseGap;

      pts.push(
        new THREE.Vector3(0, 0, currentZ)
      );
    });

    // Final point
    pts.push(
      new THREE.Vector3(
        0,
        0,
        currentZ - 20
      )
    );

    // Create smooth curve
    const curve = new THREE.CatmullRomCurve3(
      pts
    );

    const totalLength = Math.abs(currentZ);

    /* ---------- Movie Placement ---------- */

    const allTitles = props.titles;
    const N = Math.max(1, allTitles.length);

    for (let i = 0; i < N; i++) {
      const u = N === 1 ? 0 : i / (N - 1);

      const p = curve.getPointAt(u).clone();

      titlePos.push({
        id: allTitles[i].id,
        pos: p,
      });
    }

    /* ---------- Phase Gate Placement ---------- */

    let cursor = 0;

    PHASES.forEach((phase) => {
      const phaseTitles = props.titles.filter(
        phase.filter
      );

      if (!phaseTitles.length) return;

      const start = cursor;
      const end =
        cursor + phaseTitles.length - 1;

      const mid = Math.floor(
        (start + end) / 2
      );

      const u = N === 1 ? 0 : mid / (N - 1);

      const pos = curve.getPointAt(u).clone();

      phaseDecorations.push({
        phase,
        pos,
        u,
      });

      cursor += phaseTitles.length;
    });

    return {
      curve,
      titlePositions: titlePos,
      phaseDecorations,
      totalLength,
    };
  }, [props.titles]);

  // Scroll pages based on path length
  const pages = Math.max(
    2,
    layout.totalLength / 25
  );

  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 5, 10], fov: 60, far: 2000,
        }}
      >
        <color attach="background" args={["#000"]}
        />

        <fog attach="fog" args={["#000", 10, 120]}
        />

        <ScrollControls pages={pages} damping={0.3} enabled={props.started}
        >
          <Suspense fallback={null}>
            <SceneContent
              {...props}
              layout={layout}
            />

            {/* Preload all textures/models */}
            <Preload all />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </div>
  );
}