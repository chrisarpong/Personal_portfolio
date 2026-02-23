import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('http://localhost:3001/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                console.error('Failed to send message');
                setStatus('error');
                setTimeout(() => setStatus(''), 3000);
            }
        } catch (error) {
            console.error('Network error:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header">
                    <div className="title-col">
                        <span className="mono-text section-number">04</span>
                        <h2 className="section-title">Connect</h2>
                    </div>
                    <div className="desc-col">
                        <p>
                            Available for freelance projects, senior engineering roles, and selected open-source collaborations.
                        </p>
                    </div>
                </div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="info-block">
                            <span className="mono-text info-label">Direct</span>
                            <a href="mailto:christiananietie10@gmail.com" className="info-value hover-underline">
                                Christiananietie10@gmail.com
                            </a>
                        </div>

                        <div className="info-block">
                            <span className="mono-text info-label">Social</span>
                            <div className="social-links">
                                <a href="https://github.com/chrisarpong" className="hover-underline social-link">
                                    <Github size={18} />
                                    <span>GitHub</span>
                                </a>
                                <a href="www.linkedin.com/in/christian-sarpong-5751a626b" className="hover-underline social-link">
                                    <Linkedin size={18} />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://x.com/Sar_pongchris" className="hover-underline social-link">
                                    <Twitter size={18} />
                                    <span>Twitter</span>
                                </a>

                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name" className="mono-text">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="mono-text">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-group message-group">
                                <label htmlFor="message" className="mono-text">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we collaborate?"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="submit-group">
                                <button
                                    type="submit"
                                    className="btn-primary submit-btn"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Transmitting...' : status === 'success' ? (
                                        <>
                                            Received <CheckCircle2 size={18} />
                                        </>
                                    ) : status === 'error' ? (
                                        'Error Sending'
                                    ) : (
                                        <>
                                            Send Message <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
