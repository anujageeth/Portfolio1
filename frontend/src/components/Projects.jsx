import React, { useState, useEffect, useRef } from 'react';
import ProjectCard, { ProjectSkeleton } from './ProjectCard';
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
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
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
        },
        {
            id: 4,
            title: "DevOps Project",
            description: "A Social Media Web Application while integrating key DevOps practices and tools",
            longDescription: "This project is implemented to build a Social Media Web Application while integrating key DevOps practices and tools such as Docker, Jenkins, Terraform, Ansible, and AWS. The goal is not only to develop the application but also to demonstrate an end-to-end DevOps pipeline for deployment and delivery.",
            image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            technologies: ["Docker", "Jenkins", "AWS", "Terraform", "Ansible", "React", "Node.js", "MongoDB"],
            features: [
                "🛠 Pipeline Steps:",
                "• Jenkins watches for changes in the main branch on GitHub.",
                "• On change:",
                "-- Installs dependencies with npm install (for both frontend and backend).",
                "-- Builds the frontend using npm run build.",
                "• Builds Docker images for frontend and backend using their respective Dockerfile.",
                "• Uses docker-compose.yml to manage services (e.g., MongoDB).",
                "• Pushes images to Docker Hub.",
                "🔄 Jenkins Pipeline Stages",
                "✅ Stage 1: Checkout Code",
                "• Pulls the latest code from GitHub repository.",
                "🧱 Stage 2: Build Frontend",
                "• Installs frontend dependencies.",
                "• Builds production-ready React frontend (npm run build).",
                "🧱 Stage 3: Build Backend",
                "• Installs backend dependencies (npm install).",
                "🐋 Stage 4: Dockerize and Push Frontend",
                "• Builds Docker image for frontend.",
                "• Pushes it to Docker Hub.",
                "🐋 Stage 5: Dockerize and Push Backend",
                "• Builds Docker image for backend.",
                "• Pushes it to Docker Hub."
            ],
            link: "https://github.com/anujageeth/DevOps1",
            demoLink: ""
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

    // Use hardcoded data with a simulated loading state
    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setProjects(projectsData); // Use all projects
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

    // Save ref for each project card
    const setProjectRef = (element, id) => {
        if (element && id) {
            projectRefs.current[id] = element;
        }
    };

    // Generate skeleton loading cards
    const renderSkeletons = () => {
        // Determine number of cards based on screen width
        let cardCount = 3;
        if (window.innerWidth <= 768) {
            cardCount = 1;
        } else if (window.innerWidth <= 1200) {
            cardCount = 2;
        }
        
        return Array(cardCount * 2).fill().map((_, index) => (
            <ProjectSkeleton key={`skeleton-${index}`} />
        ));
    };

    return (
        <section id="projects">
            <h2>Projects</h2>
            <p className="section-intro">
                Check out my latest projects, showcasing my skills in web development, machine learning, and more.
            </p>
            
            <div className="project-list">
                {loading ? renderSkeletons() : (
                    projects.map(project => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            onView={handleViewProject}
                            setRef={setProjectRef}
                        />
                    ))
                )}
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