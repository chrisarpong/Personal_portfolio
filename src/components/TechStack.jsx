import React from 'react';
import { motion } from 'framer-motion';
import {
    Layers,
    Server,
    Cloud,
    Database,
    Code2,
    Braces,
    LayoutTemplate,
    Container
} from 'lucide-react';
import './TechStack.css';

const skills = [
    { name: 'React / Next.js', class: 'frontend', icon: <Layers size={24} /> },
    { name: 'Node.js', class: 'backend', icon: <Server size={24} /> },
    { name: 'AWS / Cloud', class: 'infra', icon: <Cloud size={24} /> },
    { name: 'PostgreSQL', class: 'database', icon: <Database size={24} /> },
    { name: 'TypeScript', class: 'language', icon: <Code2 size={24} /> },
    { name: 'GraphQL', class: 'api', icon: <Braces size={24} /> },
    { name: 'Tailwind CSS', class: 'frontend', icon: <LayoutTemplate size={24} /> },
    { name: 'Docker', class: 'infra', icon: <Container size={24} /> }
];

const TechStack = () => {
    return (
        <section id="skills" className="tech-stack section">
            <div className="container">
                <div className="section-header">
                    <div className="title-col">
                        <span className="mono-text section-number">01</span>
                        <h2 className="section-title">Capabilities</h2>
                    </div>
                    <div className="desc-col">
                        <p>
                            Leveraging modern frameworks and robust infrastructure to build resilient, high-performance Fullstack applications.
                        </p>
                    </div>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-cell glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="skill-content">
                                <div className="skill-header">
                                    <span className="mono-text skill-class">{skill.class}</span>
                                    <div className="skill-icon">{skill.icon}</div>
                                </div>
                                <h3 className="skill-name">{skill.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
