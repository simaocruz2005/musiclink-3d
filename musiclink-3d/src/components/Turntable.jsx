import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export default function Turntable({ reactValue = 0 }) {
  const group = useRef();

  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.06;
    group.current.rotation.y += delta * (0.12 + reactValue * 0.8);
    const pulse = 1 + reactValue * 0.05;
    group.current.scale.setScalar(pulse);
  });

  return (
    <group ref={group} position={[0, 0, 0]}>

      {/* Main sphere body - black glossy */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhysicalMaterial
          color="#080808"
          metalness={0.95}
          roughness={0.03}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0.02}
          envMapIntensity={3}
        />
      </mesh>

      {/* Grille background */}
      <mesh position={[0.01, 0.05, 0.78]}>
        <circleGeometry args={[0.62, 128]} />
        <meshStandardMaterial color="#0d0d0d" metalness={0.2} roughness={0.9} />
      </mesh>

      {/* Grille rings */}
      {[0.52, 0.42, 0.32, 0.22, 0.14, 0.07].map((r, i) => (
        <mesh key={i} position={[0.01, 0.05, 0.79]}>
          <ringGeometry args={[r - 0.022, r, 128]} />
          <meshStandardMaterial color="#1c1c1c" metalness={0.3} roughness={0.7} />
        </mesh>
      ))}

      {/* Speaker cone center */}
      <mesh position={[0.01, 0.05, 0.80]}>
        <circleGeometry args={[0.22, 64]} />
        <meshStandardMaterial color="#111" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* Dust cap */}
      <mesh position={[0.01, 0.05, 0.815]}>
        <circleGeometry args={[0.07, 32]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Cabasse brand label */}
      <Html
        position={[0.01, 0.19, 0.85]}
        center
        distanceFactor={2.8}
        style={{ pointerEvents: "none" }}
      >
        <div style={{
          color: "#c0c0c0",
          fontFamily: "Georgia, serif",
          fontSize: "13px",
          fontStyle: "italic",
          letterSpacing: "0.1em",
          textShadow: "0 0 8px rgba(255,255,255,0.5)",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}>
          Cabasse
        </div>
      </Html>

      {/* Main chrome equatorial ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.15, 0]}>
        <torusGeometry args={[0.985, 0.052, 32, 256]} />
        <meshPhysicalMaterial
          color="#b8b8b8"
          metalness={1}
          roughness={0.02}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0.01}
          envMapIntensity={3}
        />
      </mesh>

      {/* Thin chrome accent ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
        <torusGeometry args={[0.998, 0.016, 16, 256]} />
        <meshPhysicalMaterial
          color="#d0d0d0"
          metalness={1}
          roughness={0.02}
          clearcoat={1}
        />
      </mesh>

      {/* Base neck */}
      <mesh position={[0, -1.08, 0]}>
        <cylinderGeometry args={[0.12, 0.16, 0.18, 32]} />
        <meshPhysicalMaterial color="#0a0a0a" metalness={0.95} roughness={0.05} clearcoat={1} />
      </mesh>

      {/* Base disk */}
      <mesh position={[0, -1.19, 0]}>
        <cylinderGeometry args={[0.35, 0.38, 0.05, 64]} />
        <meshPhysicalMaterial color="#111111" metalness={0.98} roughness={0.03} clearcoat={1} envMapIntensity={2} />
      </mesh>

      {/* Base chrome edge */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.185, 0]}>
        <torusGeometry args={[0.37, 0.014, 16, 128]} />
        <meshPhysicalMaterial color="#c0c0c0" metalness={1} roughness={0.02} clearcoat={1} />
      </mesh>

      {/* Audio reactive glow */}
      <mesh>
        <sphereGeometry args={[1.12, 32, 32]} />
        <meshBasicMaterial
          color="#3366ff"
          transparent
          opacity={0.015 + reactValue * 0.1}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

    </group>
  );
}
