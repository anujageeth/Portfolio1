import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TechLogo from './TechLogo';
import ProjectModal from './ProjectModal';
import '../styles/Projects.css';

// List of technologies that have logos defined in TechLogo component
const technologiesWithLogos = [
  'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 
  'HTML', 'CSS', 'Git', 'Python', 'C++'
];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const projectRefs = useRef({});

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

    // Fallback projects remain the same
    const fallbackProjects = [
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
            link: "https://github.com/yourusername/portfolio",
            demoLink: "https://yourdemo.com"
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
            link: "https://github.com/yourusername/ecommerce",
            demoLink: "https://yourdemo.com"
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
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "Real-time weather dashboard that displays forecasts and historical weather data.",
            longDescription: "A weather dashboard application that provides real-time weather updates and forecasts for any location worldwide. Built with JavaScript, HTML, and CSS, this app integrates with the OpenWeatherMap API to fetch current conditions, hourly forecasts, and 7-day predictions. Users can save favorite locations, view historical weather data, and receive weather alerts. The interface is designed to be clean, informative, and accessible on both desktop and mobile devices.",
            image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            technologies: ["JavaScript", "HTML", "CSS"],
            features: [
                "Current weather conditions for any location",
                "Hourly and 7-day weather forecasts",
                "Interactive weather maps",
                "Location search and favorites",
                "Historical weather data comparison",
                "Severe weather alerts and notifications"
            ],
            link: "https://github.com/yourusername/weatherapp",
            demoLink: "https://yourdemo.com"
        },
        {
            id: 5,
            title: "Machine Learning Classifier",
            description: "Image classification tool using machine learning to identify objects in photos.",
            longDescription: "This machine learning application uses computer vision techniques to classify and identify objects in images. Built with Python for the backend ML processing and React for the user interface, it leverages pre-trained models like ResNet and YOLO for fast and accurate image classification. Users can upload images or provide URLs for analysis, and the system returns object classifications with confidence scores. The application also includes a React-based dashboard for visualizing classification results and historical data.",
            image: "https://images.unsplash.com/photo-1534366428-e54c1db0bed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            technologies: ["Python", "React", "MongoDB"],
            features: [
                "Image classification with high accuracy",
                "Multiple ML models for different use cases",
                "Batch processing for multiple images",
                "Result history and data visualization",
                "API integration options for developers",
                "Mobile-friendly interface"
            ],
            link: "https://github.com/yourusername/ml-classifier",
            demoLink: "https://yourdemo.com"
        }
    ];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('/api/projects');
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                // console.error('Error fetching projects:', error);
                setProjects(fallbackProjects); // Use fallback if API fails
                // setError('Failed to fetch projects from server. Displaying sample projects instead.');
                setLoading(false);
            }
        };

        // Attempt to fetch from API
        fetchProjects();
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

    if (loading) {
        return <div className="loading">Loading projects...</div>;
    }

    return (
        <section id="projects">
            <h2>Projects</h2>
            {error && <div className="error-message">{error}</div>}
            <div className="project-list">
                {projects.map(project => (
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
                ))}
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

export default Projects;