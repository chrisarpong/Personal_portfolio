import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import './SelectedWorks.css';

const projects = [
    {
        title: 'SaaS Analytics Dashboard',
        category: 'FINTECH • 2024',
        description: 'Handling high-frequency data streams without UI lag while rendering thousands of data points on interactive charts.',
        details: {
            problem: 'The client needed a real-time financial dashboard capable of rendering 50,000+ live data points per second across multiple charting instances without causing main-thread blocking or jank in the browser.',
            architecture: 'Implemented a custom WebSocket layer bundled with Web Workers to handle data parsing off the main thread. Utilized D3.js paired with Canvas API (instead of SVG) to maintain a steady 60fps render cycle. State management handled via structured Zustand stores to prevent unnecessary component re-renders.',
            result: 'Achieved a 400% increase in data throughput capacity while reducing average client-side memory consumption by 60%. The platform now supports 10x the concurrent users pre-optimization.'
        },
        tech: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'Zustand', 'Canvas API'],
        links: { demo: '#', code: '#' },
        color: '#3b82f6'
    },
    {
        title: 'Cognitive Search Engine',
        category: 'AI INTEGRATION • 2024',
        description: 'An internal tool leveraging vector embeddings to allow semantic search across millions of legal documents with < 50ms latency.',
        details: {
            problem: 'A legal firm required a way to query millions of unstructured case files using natural language rather than strict keyword searches, overcoming limitations in their legacy Elasticsearch setup.',
            architecture: 'Built a multi-stage ingestion pipeline using Python and FastAPI to chunk documents and generate vector embeddings via OpenAI models. Stored embeddings in a distributed Pinecone vector database. The frontend is a Next.js App Router application offering highly responsive, progressively enhanced search UI.',
            result: 'Reduced average search-and-discovery time for paralegals from 15 minutes to under 30 seconds. The system holds a 98% accuracy rate for semantic relevance scoring.'
        },
        tech: ['Python', 'FastAPI', 'OpenAI', 'Next.js', 'Pinecone Vector DB', 'TailwindCSS'],
        links: { demo: '#', code: '#' },
        color: '#8b5cf6'
    },
    {
        title: 'Project Title Three',
        category: 'CATEGORY • 2024',
        description: 'Edit this placeholder project description with details about your work and the challenges you solved.',
        details: {
            problem: 'What was the core issue or customer requirement you were addressing?',
            architecture: 'What stack or system design decisions did you make? How did you build it?',
            result: 'What were the tangible outcomes or performance metrics achieved?'
        },
        tech: ['React', 'Node.js', 'PostgreSQL'],
        links: { demo: '#', code: '#' },
        color: '#10b981'
    },
    {
        title: 'Project Title Four',
        category: 'CATEGORY • 2023',
        description: 'Edit this placeholder project description with details about your work and the challenges you solved.',
        details: {
            problem: 'What was the core issue or customer requirement you were addressing?',
            architecture: 'What stack or system design decisions did you make? How did you build it?',
            result: 'What were the tangible outcomes or performance metrics achieved?'
        },
        tech: ['Typescript', 'Express', 'MongoDB'],
        links: { demo: '#', code: '#' },
        color: '#f59e0b'
    }
];

const SelectedWorks = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="selected-works section">
            <div className="container">
                <div className="section-header">
                    <div className="title-col">
                        <span className="mono-text section-number">02</span>
                        <h2 className="section-title">Selected Works</h2>
                    </div>
                    <div className="desc-col">
                        <p>
                            A curated selection of engineering challenges and architectural solutions. Focused on performance, scalability, and modern aesthetics.
                        </p>
                    </div>
                </div>

                <div className="works-list">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="work-item glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="project-hover-bg"></div>

                            <div className="work-meta">
                                <span className="mono-text work-category">{project.category}</span>
                                <div className="work-tech mono-text">
                                    {project.tech.map(tech => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="work-details">
                                <h3 className="work-title">{project.title}</h3>
                                <p className="work-desc">{project.description}</p>
                                <div className="work-links">
                                    <button
                                        className="link-arrow modal-trigger-btn"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <span>View Case Study</span>
                                        <ArrowUpRight size={16} className="arrow-icon" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default SelectedWorks;
