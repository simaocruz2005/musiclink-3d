import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom, DepthOfField, Vignette } from "@react-three/postprocessing";

export default function Lighting({ intensity = 0 }) {
  const bloomIntensity = 0.8 + intensity * 2;

  return (
    <>
      <ambientLight intensity={0.15} />
      
      {/* Luz principal — cima direita */}
      <spotLight
        position={[4, 6, 3]}
        angle={0.4}
        penumbra={0.8}
        castShadow
        intensity={2}
        color="#ffffff"
      />

      {/* Luz azul fria — fundo esquerdo */}
      <spotLight
        position={[-4, 3, -4]}
        intensity={1.2}
        color="#2244ff"
        angle={0.5}
        penumbra={1}
      />

      {/* Luz quente âmbar — baixo direito */}
      <spotLight
        position={[3, -1, 3]}
        intensity={0.8}
        color="#ff6600"
        angle={0.6}
        penumbra={1}
      />

      {/* Luz reatival ao áudio */}
      <pointLight
        position={[0, 1, 0]}
        intensity={intensity * 3}
        color="#4488ff"
        distance={5}
      />

      <Environment preset="night" background={false} />

      <EffectComposer>
        <DepthOfField
          focusDistance={0.01}
          focalLength={0.05}
          bokehScale={3}
        />
        <Bloom
          intensity={bloomIntensity}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.3} darkness={0.8} />
      </EffectComposer>
    </>
  );
}