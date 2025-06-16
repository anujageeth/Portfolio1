import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    const navigate = useNavigate();
    
    const handleProjectsClick = () => {
        navigate('/projects');
    };
    
    return (
        <div className="hero">
            <h1>Welcome to My Portfolio</h1>
            <p>I am a Computer Engineering undergraduate passionate about technology and innovation.</p>
            <div className="button-group">
                {/* <a href="#projects" className="btn">View My Work</a> */}
                <button onClick={handleProjectsClick} className="btn1">Browse Projects</button>
            </div>
        </div>
    );
};

export default Hero;