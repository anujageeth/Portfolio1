import React from 'react';
import About from '../components/About';
import { useNavigate } from 'react-router-dom';
import { 
  FaGraduationCap, FaBriefcase, FaLaptopCode, FaLightbulb, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn,
  FaFacebookF, FaInstagram, FaYoutube, FaTiktok 
} from 'react-icons/fa';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    navigate('/cv');
  };

  return (
    <div className="about-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image">
            <img src="/me.jpeg" alt="Anuja Geeth" />
          </div>
          <div className="profile-info">
            <h2>Anuja Geeth</h2>
            <p className="profile-tagline">Computer Engineering Student & Web Developer</p>
            <p className="profile-bio">
              Passionate about creating elegant solutions to complex problems. 
              I specialize in web development with a focus on modern JavaScript frameworks.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon"><FaPhone /></span>
                <a href="tel:+94701234567">+94 76 70 70 524</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><FaEnvelope /></span>
                <a href="mailto:contact@anujageeth.com">priyanjanabag@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><FaMapMarkerAlt /></span>
                <span>Buttala, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="profile-footer">
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
          <div className="profile-actions">
            <button className="btn1" onClick={handleResumeClick}>View Resume</button>
            {/* <a href="/resume.pdf" download className="btn download-resume">
              Download Resume
            </a> */}
          </div>
        </div>
      </div>
      
      <div className="about-extended">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h4>Education</h4>
              <div className="education-item">
                <span className="date">2022 – Present</span>
                <h5>B.Sc. (Hons) in Computer Engineering</h5>
                <p>University of Ruhuna, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h4>Experience</h4>
              <div className="experience-item">
                <span className="date">Intern - Software Engineer</span>
                <h5>National Water Supply & Drainage Board (NWSDB)</h5>
                <p>Worked on creating responsive Next.Js webapps</p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaLaptopCode />
            </div>
            <div className="timeline-content">
              <h4>Interests & Hobbies</h4>
              <ul className="interests-list">
                <li>🎶 Music lover</li>
                <li>📸 Photography addict</li>
                <li>✈️ Love traveling</li>
                <li>🎬 Enjoy editing videos</li>
                <li>🚀 Exploring futuristic tech</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaLightbulb />
            </div>
            <div className="timeline-content">
              <h4>Fun Facts</h4>
              <ul className="fun-facts-list">
                <li>⚡ I once debugged a bug at 3AM that turned out to be a missing semicolon.</li>
                <li>🎯 I enjoy designing UIs almost as much as writing the logic behind them.</li>
                <li>🌍 I dream of working remotely and traveling the world with just a laptop and a solid Wi-Fi connection.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;