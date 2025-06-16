import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        'JavaScript',
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'HTML',
        'CSS',
        'Git',
        'Python',
        'C++'
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;