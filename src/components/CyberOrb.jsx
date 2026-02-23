import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, Float } from '@react-three/drei';

const CyberOrb = () => {
    const meshRef = useRef();

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <TorusKnot ref={meshRef} args={[1, 0.3, 150, 20]} scale={1.2}>
                <meshStandardMaterial
                    color="#06B6D4"
                    wireframe={true}
                    emissive="#06B6D4"
                    emissiveIntensity={0.8}
                    transparent={true}
                    opacity={0.8}
                />
            </TorusKnot>
        </Float>
    );
};

export default CyberOrb;
