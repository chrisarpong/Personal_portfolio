import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import './Hero.css';
import './Hero.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
};

const graphicVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 40,
            damping: 20,
            delay: 0.4
        }
    }
};


const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-badge" variants={itemVariants}>
                        <span className="status-indicator"></span>
                        <span className="mono-text">IT professional and Fullstack Developer</span>
                    </motion.div>

                    <motion.h1 className="hero-title" variants={itemVariants}>
                        Building Systems,<br />
                        <span className="text-shimmer">Crafting Solutions</span>
                    </motion.h1>

                    <motion.p className="hero-desc" variants={itemVariants}>
                        Passionate IT student dedicated to becoming a Fullstack Developer.
                        I bridge the gap between complex backend logic and sleek frontend interfaces to build modern web applications.
                    </motion.p>

                    <motion.div className="hero-actions" variants={itemVariants}>
                        <MagneticButton href="#projects" className="btn-primary">
                            View Work
                        </MagneticButton>
                        <MagneticButton href="#contact" className="btn-secondary">
                            Contact
                        </MagneticButton>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    variants={graphicVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="hero-image-box glass-panel">
                        {/* Placeholder for user image */}
                        <div className="image-placeholder-content">
                            <span className="mono-text text-cyan">[ Your Image Here ]</span>
                        </div>
                    </div>
                    <div className="graphic-glow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
