import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const CyberOrb = () => {
    const sphereRef = useRef();

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.8}>
                <MeshDistortMaterial
                    color="#4ADE80" // Base green
                    emissive="#06B6D4" // Cyan glow
                    emissiveIntensity={0.8}
                    wireframe={true}
                    transparent={true}
                    opacity={0.8}
                    distort={0.4} // Adds the fluid, shifting shape effect
                    speed={2} // Speed of the fluid distortion
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

export default CyberOrb;
