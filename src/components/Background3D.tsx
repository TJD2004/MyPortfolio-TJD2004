import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface Background3DProps {
  isDark: boolean;
}

const StarField: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.03;
      ref.current.rotation.y = state.clock.elapsedTime * 0.04;
      ref.current.position.z = Math.sin(state.clock.elapsedTime * 0.8) * 3;
      ref.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={isDark ? "#8b5cf6" : "#a855f7"}
        size={isDark ? 0.5 : 0.3}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isDark ? 0.8 : 0.4}
      />
    </Points>
  );
};

const FloatingGeometry: React.FC<{ isDark: boolean; position: [number, number, number] }> = ({ isDark, position }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 2;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.7) * 1;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={isDark ? "#a855f7" : "#8b5cf6"}
        transparent
        opacity={isDark ? 0.4 : 0.2}
        wireframe
      />
    </mesh>
  );
};

const FloatingSphere: React.FC<{ isDark: boolean; position: [number, number, number] }> = ({ isDark, position }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0]) * 2.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.8) * 1.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.7;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      meshRef.current.scale.setScalar(0.5 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial
        color={isDark ? "#ec4899" : "#f472b6"}
        transparent
        opacity={isDark ? 0.3 : 0.15}
        wireframe
      />
    </mesh>
  );
};

const Background3D: React.FC<Background3DProps> = ({ isDark }) => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={isDark ? 0.4 : 0.2} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 0.8 : 0.4} />
        <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.3 : 0.2} color={isDark ? "#ec4899" : "#f472b6"} />
        <StarField isDark={isDark} />
        <FloatingGeometry isDark={isDark} position={[3, 0, -8]} />
        <FloatingGeometry isDark={isDark} position={[-4, 2, -6]} />
        <FloatingSphere isDark={isDark} position={[5, -3, -10]} />
        <FloatingSphere isDark={isDark} position={[-6, 1, -12]} />
        <FloatingSphere isDark={isDark} position={[2, 4, -7]} />
      </Canvas>
    </div>
  );
};

export default Background3D;