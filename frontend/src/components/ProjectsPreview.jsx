import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard, { ProjectSkeleton } from './ProjectCard';
import ProjectModal from './ProjectModal';
import '../styles/Projects.css';
import '../styles/SkillsPreview.css';
import projectsData from '../data/projectData'; // Import project data

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

    // Use imported data with a simulated loading state
    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setProjects(projectsData.slice(0, 3)); // Use only first 3 projects from imported data
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

    const handleViewAllProjects = () => {
        navigate('/projects');
    }

    // Generate skeleton loading cards
    const renderSkeletons = () => {
        // Determine number of cards based on screen width
        let cardCount = 3;
        if (window.innerWidth <= 768) {
            cardCount = 1;
        } else if (window.innerWidth <= 1200) {
            cardCount = 2;
        }
        
        return Array(cardCount).fill().map((_, index) => (
            <ProjectSkeleton key={`skeleton-${index}`} />
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
                {loading ? renderSkeletons() : (
                    projects.map(project => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            onView={handleViewProject}
                            setRef={setProjectRef}
                            isPreview={true}
                        />
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