import * as THREE from "three";
import { Cloud, Stars, Sparkles } from "@react-three/drei";

export default function NebulaBackground() {
  return (
    <group>
      {/* Stars */}
      <Stars radius={400} depth={120} count={6000} factor={5} saturation={1} fade speed={0.4}
      />

      {/* Cosmic dust */}
      <Sparkles count={900} scale={[260, 260, 260]} size={3} speed={0.25} opacity={0.7} color="#ffffff"
      />

      <Sparkles count={250} scale={[220, 220, 220]} size={10} speed={0.08} opacity={0.35} color="#a855f7"
      />

      <Sparkles count={180} scale={[260, 180, 260]} size={14} speed={0.06} opacity={0.25} color="#38bdf8"
      />

      {/* Nebula clouds (make them feel distant + wide) */}
      <group position={[0, -30, -140]}>
        <Cloud opacity={0.25} speed={0.08} bounds={[140, 70, 70]} segments={22} color="#5b21b6" volume={18}
        />
      </group>

      <group position={[110, 60, -180]}>
        <Cloud opacity={0.18} speed={0.06} bounds={[120, 60, 60]} segments={18} color="#1e40af" volume={20}
        />
      </group>

      <group position={[-120, 20, -170]}>
        <Cloud opacity={0.16} speed={0.05} bounds={[120, 60, 60]} segments={18} color="#be123c" volume={18}
        />
      </group>

      {/* Very subtle vignette shell (no bright disc look) */}
      <mesh>
        <sphereGeometry args={[520, 32, 32]} />
        <meshBasicMaterial color="#050510" side={THREE.BackSide} transparent opacity={0.35}
        />
      </mesh>
    </group>
  );
}