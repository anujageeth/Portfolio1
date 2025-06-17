import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import SkillsPreview from '../components/SkillsPreview';
import ProjectsPreview from '../components/ProjectsPreview';
import LinkedInPosts from '../components/LinkedInPosts';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <SkillsPreview />
      <LinkedInPosts />
      <ProjectsPreview />
    </div>
  );
};

export default HomePage;