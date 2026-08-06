import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group, Points as ThreePoints } from "three";

function NeuralCore() {
  const group = useRef<Group>(null);

  const nodes = useMemo(() => {
    const items: [number, number, number][] = [];
    const count = 26;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.55;
      items.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return items;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.16;
    group.current.rotation.x +=
      (state.pointer.y * 0.35 - group.current.rotation.x) * 0.03;
    group.current.rotation.z +=
      (state.pointer.x * 0.2 - group.current.rotation.z) * 0.03;
  });

  return (
    <group ref={group}>
      <Icosahedron args={[1.5, 2]}>
        <meshStandardMaterial
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.45}
          emissive="#3B82F6"
          emissiveIntensity={0.6}
        />
      </Icosahedron>
      <Icosahedron args={[1.05, 3]}>
        <meshPhysicalMaterial
          color="#111827"
          roughness={0.15}
          metalness={0.9}
          transmission={0.35}
          thickness={1.2}
          emissive="#6366F1"
          emissiveIntensity={0.25}
        />
      </Icosahedron>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={i % 4 === 0 ? "#22C55E" : "#93C5FD"} />
        </mesh>
      ))}
    </group>
  );
}

function Dust() {
  const ref = useRef<ThreePoints>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 9;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60A5FA"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

export default function NeuralScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={60} color="#3B82F6" />
      <pointLight position={[-4, -2, 2]} intensity={35} color="#6366F1" />
      <pointLight position={[0, 3, -4]} intensity={25} color="#22C55E" />
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.9}>
        <NeuralCore />
      </Float>
      <Dust />
    </Canvas>
  );
}