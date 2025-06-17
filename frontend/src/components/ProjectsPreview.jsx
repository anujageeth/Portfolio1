import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TechLogo from './TechLogo';
import ProjectModal from './ProjectModal';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/Projects.css';
import '../styles/SkillsPreview.css';

// List of technologies that have logos defined in TechLogo component
const technologiesWithLogos = [
  'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 
  'HTML', 'CSS', 'Git', 'Python', 'C++'
];

const ProjectsPreview = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const projectRefs = useRef({});
    const navigate = useNavigate();

    // Initialize project refs as an empty object
    useEffect(() => {
        projectRefs.current = {};
    }, []);

    // Effect for 3D tilt
    useEffect(() => {
        const handleMouseMove = (e, id) => {
            const card = projectRefs.current[id];
            if (!card) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };
        
        const handleMouseLeave = (id) => {
            const card = projectRefs.current[id];
            if (!card) return;
            
            // Reset to default hover state
            card.style.transform = 'translateY(-8px) rotateX(5deg) rotateY(-5deg)';
            
            // After transitioning out, reset completely
            setTimeout(() => {
                if (card && !card.matches(':hover')) {
                    card.style.transform = '';
                }
            }, 500);
        };
        
        // Add event listeners to all project cards
        Object.keys(projectRefs.current).forEach(id => {
            const card = projectRefs.current[id];
            if (!card) return;
            
            const mouseMove = (e) => handleMouseMove(e, id);
            const mouseLeave = () => handleMouseLeave(id);
            
            card.addEventListener('mousemove', mouseMove);
            card.addEventListener('mouseleave', mouseLeave);
            
            return () => {
                card.removeEventListener('mousemove', mouseMove);
                card.removeEventListener('mouseleave', mouseLeave);
            };
        });
    }, [projects]); // Re-run when projects change

    // Hardcoded projects data
    const projectsData = [
        {
            id: 1,
            title: "Lab Management System",
            description: "A web-based Management System developed to manage laboratory equipment, bookings, users and reports.",
            longDescription: "This system aims to simplify the laboratories and related procedures of the Department of Electrical and Information Engineering. The main goal of this project is to manage the inventory of the department. Also, there are more features to generate inventory reports, manage users, equipment check-in and check-out and laboratory booking.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            technologies: ["React", "Node.js", "Express", "MongoDB", "CSS", "EmailJS", "FireStore"],
            features: [
                "🔐 Role-Based Access Control",
                "📦 Equipment Management with CRUD operations",
                "⚠️ Low Stock Alerts for inventory control",
                "📅 Lab Booking System with availability checking",
                "📊 Report Generation & Export",
                "🔍 Search and Filter Equipment",
                "🔔 Notification System, including Telegram Bot integration",
                "🧭 Responsive UI with Side Navigation",
                "📁 User Authentication & Session Management"
            ],
            link: "https://github.com/anujageeth/LabMS3",
            demoLink: ""
        },
        {
            id: 2,
            title: "Modern Blogging Platform",
            description: "A full-featured blogging platform built with the MERN stack offering a complete social blogging experience.",
            longDescription: "A comprehensive e-commerce solution built using the MERN stack (MongoDB, Express, React, Node.js). This platform features user authentication, product browsing with filtering and search functionality, shopping cart management, secure checkout with Stripe integration, and an admin dashboard for inventory and order management. The application is fully responsive and follows modern web development best practices including state management with Redux and secure API endpoints.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            technologies: ["React", "Node.js", "Express", "MongoDB", "CSS", "Google OAuth", "Cloudinary", "TextGears"],
            features: [
                "🔐 Authentication",
                "• Email/Password login system",
                "• Google OAuth integration (auto-imports profile picture)",
                "• Secure password management",
                "✍️ Post Management",
                "• Rich text editor (bold, italic, underline, images)",
                "• AI-powered content improvement suggestions",
                "• Create, edit, delete posts",
                "• Responsive post display",
                "💬 Social Features",
                "• Like and comment system",
                "• Subscribe to other users",
                "• Notification system for:",
                "• Likes/comments on your posts",
                "• New posts from subscribed users",
                "🔍 Advanced Search",
                "• Search posts by title/content",
                "• Search users",
                "• Date range filtering",
                "• Profile-specific searching",
                "👤 User Profiles",
                "• View user stats (posts, subscribers)",
                "• Edit profile (name, bio, picture, password)",
                "• Visit others' profiles with one click",
                "🎨 Modern UI/UX",
                "• Fully responsive design",
                "• Clean, intuitive interface",
                "• Optimized for all devices"
            ],
            link: "https://github.com/anujageeth/BlogSite1",
            demoLink: "https://blog-site1-beta.vercel.app/"
        },
        {
            id: 3,
            title: "Weather Prediction AI",
            description: "This project implements a Long Short-Term Memory (LSTM) deep learning model to predict daily mean temperature.",
            longDescription: "The goal of this project is to forecast the mean temperature at 2 meters using past weather data. The dataset includes various meteorological parameters such as precipitation, wind speed, daylight hours, sunrise/sunset times, and more. The entire machine learning pipeline is implemented from scratch in Python using TensorFlow/Keras for model building and pandas, NumPy, matplotlib, and seaborn for data analysis and visualization.",
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            technologies: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "TensorFlow", "Keras"],
            features: [
                "🔍 Exploratory Data Analysis (EDA)",
                "🧹 Missing value handling and outlier detection",
                "🛠️ Feature engineering (including daylight hours and cyclical seasonal features)",
                "📈 Time-series sequencing for LSTM input",
                "🧠 2-layer LSTM model with dropout for regularization",
                "📊 Evaluation using MSE, RMSE, MAE, R²",
                "📉 Visualizations for training history and actual vs predicted results"
            ],
            link: "https://github.com/anujageeth/WeatherPrediction1",
            demoLink: ""
        }
    ];

    // Use hardcoded data with a simulated loading state
    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setProjects(projectsData.slice(0, 3)); // Use only first 3 projects
            setLoading(false);
        }, 800); // Short delay for loading animation
        
        return () => clearTimeout(timer);
    }, []);

    const handleViewProject = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    // Function to filter and limit technologies that have logos
    const getDisplayTechnologies = (technologies) => {
        const techsWithLogos = technologies.filter(tech => 
            technologiesWithLogos.includes(tech)
        );
        return techsWithLogos.slice(0, 4); // Limit to max 4 technologies
    };

    // Save ref for each project card
    const setProjectRef = (element, id) => {
        if (element && id) {
            projectRefs.current[id] = element;
        }
    };

    const handleViewAllProjects = () => {
        navigate('/projects');
    }

    // Generate skeleton loading cards
    const renderSkeletonCards = () => {
        return Array(3).fill().map((_, index) => (
            <div key={`skeleton-${index}`} className="project-item skeleton-card">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-button"></div>
                </div>
                <div className="skeleton-tech-overlay">
                    <div className="skeleton-tech"></div>
                    <div className="skeleton-tech"></div>
                    <div className="skeleton-tech"></div>
                    <div className="skeleton-tech"></div>
                </div>
            </div>
        ));
    };

    return (
        <section id="linkedin-posts">
            <div className="container">
                <h2>Featured Projects</h2>
                <p className="section-intro">
                    Check out my latest projects, showcasing my skills in web development, machine learning, and more.
                </p>
            </div>
            
            <div className="project-list preview-project-list">
                {loading ? renderSkeletonCards() : (
                    projects.map(project => (
                        <div 
                            key={project.id} 
                            className="project-item" 
                            ref={(el) => setProjectRef(el, project.id)}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                
                                {/* Tech logos overlay */}
                                <div className="project-tech-overlay">
                                    {project.technologies.length > getDisplayTechnologies(project.technologies).length && (
                                        <span className="tech-tag tech-more">
                                            +{project.technologies.length - getDisplayTechnologies(project.technologies).length}
                                        </span>
                                    )}
                                    
                                    {getDisplayTechnologies(project.technologies).map((tech, index) => (
                                        <div key={index} className="tech-icon-wrapper">
                                            <TechLogo tech={tech} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            <button 
                                className="view-project-btn" 
                                onClick={() => handleViewProject(project)}
                            >
                                View Project
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="view-all-container">
                <button className='btn1' id='home-btn' onClick={handleViewAllProjects}>
                    View all projects
                </button>
            </div>

            {/* Modal popup when a project is selected */}
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={closeModal} 
                />
            )}
        </section>
    );
};

export default ProjectsPreview;