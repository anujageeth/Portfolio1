import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, 
  FaJs, FaJava, FaDocker, FaDatabase, FaFigma, FaGithub,
  FaArrowRight
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiNpm, SiJenkins, SiJira,
  SiCplusplus, SiC, SiFirebase, SiPandas, SiNumpy
} from 'react-icons/si';
import '../styles/Skills.css';
import '../styles/SkillsPreview.css';

const SkillsPreview = () => {
    const navigate = useNavigate();

    // Selected skills categories to show on home page (6 most important ones)
    const previewSkillCategories = [
        {
            name: "Languages",
            skills: [
                { name: "C", icon: <SiC /> },
                { name: "C++", icon: <SiCplusplus /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "Java", icon: <FaJava /> },
                { name: "Python", icon: <FaPython /> }
            ]
        },
        {
            name: "Web Development",
            skills: [
                { name: "React.js", icon: <FaReact /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> }
            ]
        },
        {
            name: "Software Development",
            skills: [
                { name: "Docker", icon: <FaDocker /> },
                { name: "Jenkins", icon: <SiJenkins /> },
                { name: "JIRA", icon: <SiJira /> }
            ]
        }
    ];

    const handleViewAllSkills = () => {
        navigate('/skills');
    }

    return (
        <section id="skills-preview">
            <h2>Technical Skills</h2>
            <p className="section-intro">
                Here are some of the technologies and tools I work with. I am always eager to learn new skills and improve my expertise.
            </p>
            <div className="skills-container">
                {previewSkillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="skill-category">
                        <h3>{category.name}</h3>
                        <ul>
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>
                                    {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
            <div className="view-all-container">
                <button className='btn1' id='home-btn' onClick={handleViewAllSkills}>
                    View all skills
                </button>
            </div>
        </section>
    );
};

export default SkillsPreview;