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

const Skills = () => {
    // Skill categories with their respective skills
    const techSkillCategories = [
        {
            name: "Languages",
            skills: [
                { name: "C", icon: <SiC /> },
                { name: "C++", icon: <SiCplusplus /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "Java", icon: <FaJava /> },
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "Python", icon: <FaPython /> }
            ]
        },
        {
            name: "Web Development",
            skills: [
                { name: "React.js", icon: <FaReact /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "NPM", icon: <SiNpm /> }
            ]
        },
        {
            name: "Software Development",
            skills: [
                { name: "OOP", icon: null },
                { name: "Agile - Scrum", icon: null },
                { name: "Design Patterns", icon: null },
                { name: "JIRA", icon: <SiJira /> },
                { name: "Docker", icon: <FaDocker /> },
                { name: "Jenkins", icon: <SiJenkins /> }
            ]
        },
        {
            name: "DBMS",
            skills: [
                { name: "MongoDB", icon: <SiMongodb /> },
                // { name: "MySQL", icon: <SiMysql /> },
                { name: "SQL", icon: <FaDatabase /> }
            ]
        },
        {
            name: "Machine Learning",
            skills: [
                { name: "Pandas", icon: <SiPandas /> },
                { name: "Numpy", icon: <SiNumpy /> },
                // { name: "Scikit-learn", icon: <SiScikitlearn /> }
            ]
        },
        {
            name: "Version Control",
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "GitHub", icon: <FaGithub /> }
            ]
        },
        {
            name: "Design",
            skills: [
                { name: "Figma", icon: <FaFigma /> }
            ]
        },
        {
            name: "Cloud Platforms",
            skills: [
                { name: "Firebase", icon: <SiFirebase /> }
            ]
        }
    ];

    return (
        <>
            <section id="skills">
                <h2>Technical Skills</h2>
                <div className="skills-container">
                    {techSkillCategories.map((category, categoryIndex) => (
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

export default Skills;