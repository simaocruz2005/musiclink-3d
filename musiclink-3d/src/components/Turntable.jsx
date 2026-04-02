import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Turntable({ reactValue = 0 }) {
  const platter = useRef();
  const needle = useRef();
  const glow = useRef();

  useFrame(({ clock }, delta) => {
    // Rotação reativa ao áudio
    platter.current.rotation.y += delta * (0.3 + reactValue * 3);

    // Pulso de escala com o beat
    const pulse = 1 + reactValue * 0.25;
    platter.current.scale.setScalar(pulse);

    // Glow reativo
    const glowScale = 1 + reactValue * 0.8;
    glow.current.scale.setScalar(glowScale);
    glow.current.material.opacity = 0.05 + reactValue * 0.4;
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Base do toca-discos */}
      <mesh position={[0, -0.15, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.3, 1.3, 0.1, 64]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Prato principal */}
      <mesh ref={platter} rotation-x={-Math.PI / 2} castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 0.06, 128]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={1}
          roughness={0.05}
          envMapIntensity={2}
        />
      </mesh>

      {/* Ranhuras do vinil */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.04, 0]}>
        <torusGeometry args={[0.6, 0.3, 4, 128]} />
        <meshStandardMaterial
          color="#111"
          metalness={0.9}
          roughness={0.15}
          wireframe={false}
        />
      </mesh>

      {/* Centro do vinil */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.02, 32]} />
        <meshStandardMaterial color="#cc0000" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Agulha */}
      <mesh ref={needle} position={[0.8, 0.1, 0]} rotation-z={Math.PI / 6}>
        <capsuleGeometry args={[0.015, 0.4, 8, 16]} />
        <meshStandardMaterial color="#888" metalness={1} roughness={0.1} />
      </mesh>

      {/* Efeito de glow reativo */}
      <mesh ref={glow} rotation-x={-Math.PI / 2} position={[0, 0.01, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.01, 64]} />
        <meshBasicMaterial
          color="#4488ff"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}