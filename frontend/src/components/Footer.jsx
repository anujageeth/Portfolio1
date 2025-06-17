import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Anuja Geeth</p>
                <div className="social-links">
                    <a href="https://github.com/anujageeth" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/anujageeth" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://facebook.com/anujageeth" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com/anuja_geeth" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://youtube.com/@AnujaVideos" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FaYoutube />
                    </a>
                    <a href="https://tiktok.com/anuja_geeth" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <FaTiktok />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;