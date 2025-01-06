import React from 'react';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import data from '../data.json';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Profile 
        name={data.profile.name} 
        title={data.profile.title} 
        email={data.profile.contact.email} 
        phone={data.profile.contact.phone} 
      />
      <Education education={data.education} />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
    </div>
  );
};

export default App; 