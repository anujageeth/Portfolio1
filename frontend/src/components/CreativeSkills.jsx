import React from 'react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, 
  FaJs, FaJava, FaDocker, FaDatabase, FaFigma, FaGithub
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiNpm, SiJenkins, SiJira,
  SiCplusplus, SiC, SiFirebase, SiPandas, SiNumpy
} from 'react-icons/si';
import '../styles/Skills.css';

const CreativeSkills = () => {

    const creativeSkillCategories = [
        {
            name: "Photography",
            skills: [
            { name: "Landscape" },
            { name: "Portrait" },
            { name: "Travel & Street Shots" }
            ]
        },
        {
            name: "Videography",
            skills: [
            { name: "Short Videos" },
            { name: "Short Films" },
            { name: "Cinematics" },
            { name: "Vlogging" },
            { name: "Events" }
            ]
        },
        {
            name: "Video Editing",
            skills: [
            { name: "Adobe Premiere Pro" },
            { name: "CapCut" },
            { name: "DaVinci Resolve" }
            ]
        },
        {
            name: "Graphic Design",
            skills: [
            { name: "Adobe Photoshop" },
            { name: "Figma (UI/UX)" },
            { name: "Canva" }
            ]
        },
        {
            name: "Office Tools",
            skills: [
            { name: "MS PowerPoint" },
            { name: "MS Word" }
            ]
        }
    ];

    return (
        <>
            <section id="skills">
                <h2>Creative Skills</h2>
                <p className="section-intro">
                    In addition to my technical background, I'm deeply passionate about creative expression through visual media.
                </p>
                <div className="skills-container">
                    {creativeSkillCategories.map((category, categoryIndex) => (
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
            </section>
        </>
    );
};

export default CreativeSkills;