import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useThree, useFrame, RootState } from '@react-three/fiber';
// https://github.com/pmndrs/drei
import { useGLTF, Detailed, Environment, NormalTexture } from '@react-three/drei';
// https://github.com/pmndrs/react-postprocessing
// https://github.com/vanruesc/postprocessing
import {
  EffectComposer,
  DepthOfField,
  ToneMapping,
  SSAO,
  BrightnessContrast,
  Bloom,
} from '@react-three/postprocessing';
import { KernelSize, Resolution } from 'postprocessing'

interface BananaProps {
  index: number;
  z: number;
  speed: number;
  path: string;
}

const Model: React.FC<BananaProps> = ({ index, z, speed, path }) => {
  const ref = useRef<THREE.Group>(null);
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  const { nodes, materials } = useGLTF(path);

  const [data] = useState(() => ({
    y: THREE.MathUtils.randFloatSpread(height * 2),
    x: THREE.MathUtils.randFloatSpread(2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  }));

  useFrame((state: RootState, dt: number) => {
    if (dt < 0.1 && ref.current) {
      ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y += dt * speed), -z);
      ref.current.rotation.set(
        (data.rX += dt / data.spin),
        Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
        (data.rZ += dt / data.spin)
      );

      if (data.y > height * (index === 0 ? 4 : 1)) {
        data.y = -(height * (index === 0 ? 4 : 1));
      }
    }
  });

  return (
    <Detailed ref={ref} distances={[0, 65, 80]}>
      <mesh geometry={nodes.high.geometry} material={materials["Material.001"]}   />
      <mesh geometry={nodes.mid.geometry} material={materials["Material.001"]}  />
      <mesh geometry={nodes.low.geometry} material={materials["Material.001"]}  />
    </Detailed>
  );
};

const modelPaths = [
  '../images/dragon.glb',
  '../images/teapot.glb',
  '../images/bunny.glb',
];

function FloatingModels({
                   speed = 1,
                   count = 80,
                   depth = 80,
                   easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2)),
                 }) {
  return (
    <Canvas
      flat
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}
    >
      <color attach="background" args={['#000000']} />
      <spotLight position={[10, 20, 10]} penumbra={1} decay={0} intensity={3} color="orange" />

      {Array.from({ length: count }).map((_, i) => (
        <Model key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} path={modelPaths[Math.floor(Math.random() * modelPaths.length)]} />
      ))}

      <Environment preset="sunset" />

      <EffectComposer enableNormalPass={false} multisampling={0}>
        <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={7} height={700} />
        <Bloom
          intensity={1.4} // The bloom intensity.
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={true} // Enables or disables mipmap blur.
          resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        />
        <ToneMapping averageLuminance={1} />
        <BrightnessContrast brightness={0} contrast={0.5} />
      </EffectComposer>
    </Canvas>
  );
}3

export default FloatingModels
