import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import CreativeWorksPage from './pages/CreativeWorksPage';
import Photography from './components/Photography';
import GraphicDesign from './components/GraphicDesign';
import VideoEditing from './components/VideoEditing';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/cv" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Creative Works Routes */}
          <Route path="/creative" element={<CreativeWorksPage />} />
          <Route path="/creative/photography" element={
            <div className="standalone-creative-component">
              <Photography />
            </div>
          } />
          <Route path="/creative/graphic" element={
            <div className="standalone-creative-component">
              <GraphicDesign />
            </div>
          } />
          <Route path="/creative/video" element={
            <div className="standalone-creative-component">
              <VideoEditing />
            </div>
          } />
          
          {/* Redirect for old URLs */}
          <Route path="/creative-photography" element={<Navigate to="/creative/photography" replace />} />
          <Route path="/creative-graphic" element={<Navigate to="/creative/graphic" replace />} />
          <Route path="/creative-video" element={<Navigate to="/creative/video" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
