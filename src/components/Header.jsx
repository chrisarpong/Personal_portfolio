import React, { useState, useEffect } from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`header ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <div className="header-container container">
                <a href="#home" className="logo">
                    <span className="logo-dot"></span>
                    Christian Sarpong
                </a>

                <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <a href="#home" onClick={() => setMobileMenuOpen(false)}>Overview</a>
                    <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Capabilities</a>
                    <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Work</a>
                    <a href="#experience" onClick={() => setMobileMenuOpen(false)}>History</a>
                </nav>

                <div className="header-actions">
                    <a href="/resume.pdf" download="Christian_Sarpong_Resume.pdf" className="download-btn" onClick={() => setMobileMenuOpen(false)}>
                        <Download size={16} />
                        <span>Resume</span>
                    </a>
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
