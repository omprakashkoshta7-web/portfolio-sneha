"use client";
import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, color, shapeType = "sphere", speed = 0.5, scale = 1 }: any) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * speed * 0.5) * 0.3;
      ref.current.rotation.y = Math.cos(clock.getElapsedTime() * speed * 0.3) * 0.3;
    }
  });

  let geometry: THREE.BufferGeometry;
  if (shapeType === "torus") {
    geometry = new THREE.TorusGeometry(0.8 * scale, 0.3 * scale, 16, 32);
  } else if (shapeType === "icosahedron") {
    geometry = new THREE.IcosahedronGeometry(0.7 * scale, 0);
  } else {
    geometry = new THREE.SphereGeometry(0.6 * scale, 24, 24);
  }

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} position={position} geometry={geometry}>
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.4}
          distort={0.2}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 400;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#a855f7"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#a855f7" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#3b82f6" />
      <pointLight position={[0, 0, 0]} intensity={0.2} color="#06b6d4" />
      <Particles />
      <FloatingShape position={[-3, 1.5, -2]} color="#a855f7" shapeType="sphere" speed={0.3} scale={1.2} />
      <FloatingShape position={[3, -1, -1]} color="#3b82f6" shapeType="torus" speed={0.4} scale={1} />
      <FloatingShape position={[-1, -2, 0.5]} color="#06b6d4" shapeType="icosahedron" speed={0.5} scale={0.8} />
      <FloatingShape position={[2.5, 2, -3]} color="#8b5cf6" shapeType="torus" speed={0.2} scale={0.9} />
    </>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
