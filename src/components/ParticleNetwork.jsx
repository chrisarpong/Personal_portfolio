import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // loadSlim is a smaller, high-performance version of tsparticles

const ParticleNetwork = () => {
    // This initializes the particles engine
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // Optional: you can log or access the container once loaded
        // console.log("Particles loaded", container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent", // Let the CSS background colors shine through
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse", // Nodes push away from mouse
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 100, // How far the mouse pushes nodes
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#06b6d4", "#8b5cf6", "#4ade80"], // Cyan, Purple, Green
                    },
                    links: {
                        color: "#94a3b8", // Slate grey links
                        distance: 150, // Max distance to draw a line
                        enable: true,
                        opacity: 0.2, // Very subtle lines
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce", // Keep them inside the screen securely
                        },
                        random: false,
                        speed: 1.5, // Slow, elegant ambient movement
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800, // Responsive density based on screen size
                        },
                        value: 80, // Number of initial nodes
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 }, // Dots are small and elegant
                    },
                },
                detectRetina: true, // Crisp rendering on high-res displays
            }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -2, // Push it behind all glass content and behind the aura-bg
                pointerEvents: 'auto' // Allow mouse detection for repulse
            }}
        />
    );
};

export default ParticleNetwork;
