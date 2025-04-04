import React, { useEffect, useRef } from 'react';
import './hero.css';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return;
            
            const { clientX, clientY } = e;
            const { width, height, left, top } = heroRef.current.getBoundingClientRect();
            
            const x = (clientX - left) / width;
            const y = (clientY - top) / height;
            
            heroRef.current.style.setProperty('--mouse-x', x);
            heroRef.current.style.setProperty('--mouse-y', y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero__shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>
            <div className="hero__content">
                <div className="hero__badge">
                    <span className="badge">Full Stack Developer</span>
                </div>
                <h1 className="hero__title">Hi, I'm [Your Name]</h1>
                <p className="hero__subtitle">Crafting Digital Experiences & Creative Solutions</p>
                <div className="hero__cta">
                    <a href="#projects" className="btn btn-primary">
                        View My Work
                        <i className="fas fa-arrow-right"></i>
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Get in Touch
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
