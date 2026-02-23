import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Float, Edges } from '@react-three/drei';

const CyberOrb = () => {
    const groupRef = useRef();

    useFrame(({ clock }) => {
        if (groupRef.current) {
            // Smoothly rotate the entire chip
            groupRef.current.rotation.x = clock.getElapsedTime() * 0.15;
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
            groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    return (
        <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
            <group ref={groupRef} scale={1.2}>
                {/* Main CPU Base Board */}
                <Box args={[2.5, 0.15, 2.5]}>
                    <meshStandardMaterial color="#05050f" roughness={0.6} metalness={0.8} />
                    <Edges linewidth={2} color="#3b82f6" /> {/* Blue edges */}
                </Box>

                {/* Raised CPU Inner Core */}
                <Box args={[1.2, 0.25, 1.2]} position={[0, 0.05, 0]}>
                    <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
                    <Edges linewidth={1.5} color="#06b6d4" /> {/* Cyan edges */}
                </Box>

                {/* Glowing Processor Center */}
                <Cylinder args={[0.4, 0.4, 0.3, 32]} position={[0, 0.15, 0]}>
                    <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={1.2} />
                </Cylinder>

                {/* Left Side Gold Data Pins */}
                {[...Array(6)].map((_, i) => (
                    <Box key={`pin-left-${i}`} args={[0.3, 0.05, 0.15]} position={[-1.35, 0, -1.25 + (i * 0.5)]}>
                        <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0.2} emissive="#fbbf24" emissiveIntensity={0.2} />
                    </Box>
                ))}

                {/* Right Side Gold Data Pins */}
                {[...Array(6)].map((_, i) => (
                    <Box key={`pin-right-${i}`} args={[0.3, 0.05, 0.15]} position={[1.35, 0, -1.25 + (i * 0.5)]}>
                        <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0.2} emissive="#fbbf24" emissiveIntensity={0.2} />
                    </Box>
                ))}

                {/* Top Side Gold Data Pins */}
                {[...Array(6)].map((_, i) => (
                    <Box key={`pin-top-${i}`} args={[0.15, 0.05, 0.3]} position={[-1.25 + (i * 0.5), 0, -1.35]}>
                        <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0.2} emissive="#fbbf24" emissiveIntensity={0.2} />
                    </Box>
                ))}

                {/* Bottom Side Gold Data Pins */}
                {[...Array(6)].map((_, i) => (
                    <Box key={`pin-bottom-${i}`} args={[0.15, 0.05, 0.3]} position={[-1.25 + (i * 0.5), 0, 1.35]}>
                        <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0.2} emissive="#fbbf24" emissiveIntensity={0.2} />
                    </Box>
                ))}
            </group>
        </Float>
    );
};

export default CyberOrb;
