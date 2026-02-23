import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer border-t">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand border-r">
                        <a href="#home" className="logo">
                            <span className="logo-dot"></span>
                            Christian Sarpong
                        </a>
                    </div>

                    <div className="footer-links-wrapper">
                        <div className="footer-links">
                            <span className="mono-text links-label">Navigation</span>
                            <a href="#home">Overview</a>
                            <a href="#skills">Capabilities</a>
                            <a href="#projects">Work</a>
                            <a href="#experience">History</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom border-t">
                    <p className="mono-text">&copy; {new Date().getFullYear()} Christian Sarpong. All rights reserved.</p>
                    <div className="footer-status">
                        <span className="status-indicator"></span>
                        <span className="mono-text">Christian sarpong</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
