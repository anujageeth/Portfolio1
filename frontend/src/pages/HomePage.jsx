import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import LinkedInPosts from '../components/LinkedInPosts';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
      <LinkedInPosts />
      <Projects />
    </div>
  );
};

export default HomePage;