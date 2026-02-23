import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        role: 'Senior Engineer',
        company: 'Tech Corp Inc.',
        period: 'Present',
        description: 'Leading the frontend migration to Next.js and establishing the internal component library design system.',
        current: true
    },
    {
        role: 'Fullstack Developer',
        company: 'Startup Solutions',
        period: '2019 — 2022',
        description: 'Developed microservices in Go and managed AWS infrastructure for a high-traffic e-commerce platform.',
        current: false
    },
    {
        role: 'Junior Developer',
        company: 'Creative Agency',
        period: '2018 — 2019',
        description: 'Built interactive marketing sites using React and GSAP. Assisted in backend API integration.',
        current: false
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header">
                    <div className="title-col">
                        <span className="mono-text section-number">03</span>
                        <h2 className="section-title">History</h2>
                    </div>
                    <div className="desc-col">
                        <p>
                            A timeline of professional roles and educational background. Focus on continuous growth and complex problem-solving.
                        </p>
                    </div>
                </div>

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="exp-item glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="exp-meta">
                                <span className={`mono-text exp-period ${exp.current ? 'current-period' : ''}`}>
                                    {exp.period}
                                </span>
                            </div>

                            <div className="exp-details">
                                <div className="exp-header-row">
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <span className="mono-text exp-company">{exp.company}</span>
                                </div>
                                <p className="exp-desc">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        className="exp-item glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="exp-meta">
                            <span className="mono-text exp-period">2015 — 2019</span>
                        </div>
                        <div className="exp-details">
                            <div className="exp-header-row">
                                <h3 className="exp-role">BS Computer Science</h3>
                                <span className="mono-text exp-company">University of Tech</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
