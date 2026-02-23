import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);
            if (isHidden) setIsHidden(false);
        };

        const handleMouseLeave = () => {
            setIsHidden(true);
        };

        const handleMouseEnter = () => {
            setIsHidden(false);
        };

        const handleLinkHoverStart = () => setIsHovered(true);
        const handleLinkHoverEnd = () => setIsHovered(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);

        // Add event listeners to all interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .clickable');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleLinkHoverStart);
            el.addEventListener('mouseleave', handleLinkHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleLinkHoverStart);
                el.removeEventListener('mouseleave', handleLinkHoverEnd);
            });
        };
    }, [cursorX, cursorY, isHidden]);

    const variants = {
        default: {
            scale: 1,
            opacity: isHidden ? 0 : 1,
            backgroundColor: 'rgba(255, 255, 255, 0)'
        },
        hover: {
            scale: 1.5,
            opacity: isHidden ? 0 : 0.5,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.5)'
        }
    };

    const dotVariants = {
        default: {
            scale: 1,
            opacity: isHidden ? 0 : 1,
        },
        hover: {
            scale: 0,
            opacity: 0,
        }
    };

    return (
        <>
            <motion.div
                className="custom-cursor-ring"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                variants={variants}
                animate={isHovered ? 'hover' : 'default'}
                transition={{ duration: 0.2 }}
            />
            <motion.div
                className="custom-cursor-dot"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: 12, // Offset to center the 8px dot inside the 32px ring
                    translateY: 12
                }}
                variants={dotVariants}
                animate={isHovered ? 'hover' : 'default'}
                transition={{ duration: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
