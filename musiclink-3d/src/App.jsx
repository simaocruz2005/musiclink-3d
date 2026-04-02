import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "./components/Experience";
import UIOverlay from "./components/UIOverlay";
import "./index.css";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#050505", color: "white", overflow: "hidden" }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <UIOverlay />
    </div>
  );
}
