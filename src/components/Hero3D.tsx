import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function createStripeTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;

  const bg = ctx.createLinearGradient(0, 0, 256, 0);
  bg.addColorStop(0, "#060606");
  bg.addColorStop(0.5, "#121212");
  bg.addColorStop(1, "#060606");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 256, 256);

  ctx.save();
  ctx.translate(128, 128);
  ctx.rotate(-Math.PI / 4);
  ctx.translate(-200, -200);

  const stripeGradient = ctx.createLinearGradient(0, 0, 400, 0);
  stripeGradient.addColorStop(0, "#a67616");
  stripeGradient.addColorStop(0.5, "#f7d36a");
  stripeGradient.addColorStop(1, "#a67616");
  ctx.fillStyle = stripeGradient;

  const stripeWidth = 60;
  const gap = 120;
  for (let y = -200; y < 600; y += gap) {
    ctx.fillRect(0, y, 400, stripeWidth);
  }

  ctx.globalCompositeOperation = "screen";
  ctx.fillStyle = "rgba(255, 240, 200, 0.35)";
  for (let y = -200; y < 600; y += gap) {
    ctx.fillRect(0, y + 10, 400, 6);
  }
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 2.4);
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

function BarberPole() {
  const group = useRef<THREE.Group>(null);
  const texture = useMemo(() => createStripeTexture(), []);

  useFrame((_, delta) => {
    texture.offset.y -= delta * 0.22;
    if (group.current) group.current.rotation.y += delta * 0.4;
  });

  return (
    <group ref={group}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.55, 0.55, 3.4, 64, 1, true]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.4}
          roughness={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh>
        <cylinderGeometry args={[0.6, 0.6, 3.45, 64, 1, true]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.15}
          roughness={0.08}
          transparent
          opacity={0.12}
          clearcoat={1}
          clearcoatRoughness={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>

      <group position={[0, 1.8, 0]}>
        <mesh>
          <cylinderGeometry args={[0.68, 0.6, 0.22, 64]} />
          <meshStandardMaterial color="#f5c14b" metalness={1} roughness={0.18} />
        </mesh>
        <mesh position={[0, 0.18, 0]}>
          <cylinderGeometry args={[0.5, 0.68, 0.14, 64]} />
          <meshStandardMaterial color="#c8932f" metalness={1} roughness={0.22} />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#f7d36a" metalness={1} roughness={0.12} />
        </mesh>
      </group>

      <group position={[0, -1.8, 0]}>
        <mesh>
          <cylinderGeometry args={[0.6, 0.68, 0.22, 64]} />
          <meshStandardMaterial color="#f5c14b" metalness={1} roughness={0.18} />
        </mesh>
        <mesh position={[0, -0.18, 0]}>
          <cylinderGeometry args={[0.68, 0.5, 0.14, 64]} />
          <meshStandardMaterial color="#c8932f" metalness={1} roughness={0.22} />
        </mesh>
      </group>
    </group>
  );
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    const targetY = pointer.x * 0.18;
    const targetX = -pointer.y * 0.1;
    const lerp = Math.min(1, delta * 2.5);
    group.current.rotation.y += (targetY - group.current.rotation.y) * lerp;
    group.current.rotation.x += (targetX - group.current.rotation.x) * lerp;
  });

  return <group ref={group}>{children}</group>;
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 5, 4]} intensity={1.2} color="#fff4d6" />
        <pointLight position={[-2.5, 0.5, 2.5]} intensity={6} distance={9} color="#f5c14b" />
        <pointLight position={[2, -1.5, 3]} intensity={2.5} distance={7} color="#ff9d3a" />

        <ParallaxRig>
          <Float speed={1.1} rotationIntensity={0} floatIntensity={0.35}>
            <group position={[-2.8, 0, 0]}>
              <BarberPole />
            </group>
          </Float>

          <Sparkles
            count={55}
            size={2.8}
            scale={[10, 6, 3]}
            speed={0.35}
            color="#f5c14b"
            opacity={0.7}
          />
          <Sparkles
            count={20}
            size={1.4}
            scale={[6, 5, 2]}
            speed={0.2}
            color="#ffe9b0"
            opacity={0.5}
          />
        </ParallaxRig>
      </Suspense>
    </Canvas>
  );
}
