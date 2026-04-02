import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function ProductShowcase({ position }) {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={ref} position={position} castShadow>
      <boxGeometry args={[0.8, 0.4, 0.4]} />
      <meshStandardMaterial color="#333" roughness={0.35} metalness={0.5} />
    </mesh>
  );
}