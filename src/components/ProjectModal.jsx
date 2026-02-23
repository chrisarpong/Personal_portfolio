import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ArrowRight } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay" onClick={onClose}>
                    <motion.div
                        className="modal-content glass-panel"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <button className="modal-close" onClick={onClose} aria-label="Close modal">
                            <X size={24} />
                        </button>

                        <div className="modal-header">
                            <span className="mono-text work-category" style={{ color: project.color || 'var(--accent-cyan)' }}>
                                {project.category}
                            </span>
                            <h2 className="modal-title">{project.title}</h2>
                        </div>

                        <div className="modal-body">
                            <div className="modal-section">
                                <h3 className="mono-text section-label">The Challenge</h3>
                                <p>{project.details?.problem || project.description}</p>
                            </div>

                            {project.details?.architecture && (
                                <div className="modal-section">
                                    <h3 className="mono-text section-label">Architecture</h3>
                                    <p>{project.details.architecture}</p>
                                </div>
                            )}

                            {project.details?.result && (
                                <div className="modal-section">
                                    <h3 className="mono-text section-label">Impact & Results</h3>
                                    <p>{project.details.result}</p>
                                </div>
                            )}

                            <div className="modal-tech">
                                <h3 className="mono-text section-label">Technologies Used</h3>
                                <div className="tech-tags">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="tech-tag glass-panel">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            {project.links?.demo && (
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    <span>Live Demo</span>
                                    <ExternalLink size={18} />
                                </a>
                            )}
                            {project.links?.code && (
                                <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                    <span>Source Code</span>
                                    <Github size={18} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
