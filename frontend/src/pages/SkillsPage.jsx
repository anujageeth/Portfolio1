import React from 'react';
import Skills from '../components/Skills';
import '../styles/ProjectsPage.css';
import CreativeSkills from '../components/CreativeSkills';

const SkillsPage = () => {
  return (
    <div className="projects-page">
      <Skills />
      <CreativeSkills />
    </div>
  );
};

export default SkillsPage;