import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Float, Edges } from '@react-three/drei';

const CyberOrb = () => {
    const meshRef = useRef();

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
            {/* The base geometry is an Icosahedron, representing a 3D structural network/node */}
            <Icosahedron ref={meshRef} args={[1.5, 1]}>

                {/* 
                  Instead of pure wireframe, we use a solid but transparent glass material 
                  and layer Edges on top for that structural/engineering look.
                */}
                <meshStandardMaterial
                    color="#0B0D17" // Very dark inner core
                    transparent={true}
                    opacity={0.8}
                    roughness={0.1}
                    metalness={0.9}
                />

                {/* The glowing structural lines forming the geometry */}
                <Edges
                    linewidth={2}
                    threshold={15} // Only draw edges at sharp angles
                    color="#06B6D4" // Neon cyan edges
                />

                {/* Adding a secondary, slightly larger wireframe for a layered glitch effect */}
                <Icosahedron args={[1.55, 1]}>
                    <meshBasicMaterial
                        color="#8b5cf6" // Purple accent 
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </Icosahedron>

            </Icosahedron>
        </Float>
    );
};

export default CyberOrb;
