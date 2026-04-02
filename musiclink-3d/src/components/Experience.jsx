import { ScrollControls } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Turntable from "./Turntable";
import Lighting from "./Lighting";
import ProductShowcase from "./ProductShowcase";
import useAudioAnalyser from "../hooks/useAudioAnalyser";

export default function Experience() {
  const { frequency, toggle } = useAudioAnalyser("/audio/musiclink-demo.mp3");

  return (
    <ScrollControls pages={3} damping={0.2}>
      <CameraRig frequency={frequency} />
      <Lighting intensity={frequency} />
      <Turntable reactValue={frequency} />
      <ProductShowcase position={[0, -1, -3]} />
      <mesh position={[0, -3, 0]} onClick={toggle}>
        <planeGeometry args={[2, 0.5]} />
        <meshBasicMaterial color={"#111"} />
      </mesh>
    </ScrollControls>
  );
}