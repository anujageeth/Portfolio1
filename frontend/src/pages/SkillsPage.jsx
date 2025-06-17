import React from 'react';
import Skills from '../components/Skills';
import '../styles/SkillsPage.css';
import CreativeSkills from '../components/CreativeSkills';

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <Skills />
      <CreativeSkills />
    </div>
  );
};

export default SkillsPage;