import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig({ frequency = 0 }) {
  const { camera } = useThree();
  const scroll = useScroll();
  const lerped = useRef(0);

  useFrame((state, delta) => {
    lerped.current = THREE.MathUtils.lerp(lerped.current, scroll.offset, delta * 2);
    camera.position.x = Math.sin(lerped.current * Math.PI) * 3;
    camera.position.y = 1 + Math.sin(lerped.current * Math.PI * 0.5);
    camera.position.z = 5 - lerped.current * 3;
    camera.position.x += Math.sin(performance.now() / 100) * frequency * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}