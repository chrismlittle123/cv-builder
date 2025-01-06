import React from 'react';
import './App.css';
import cvData from './data/cvData.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{cvData.profile.name}</h1>
        <h2>{cvData.profile.title}</h2>
        <p>Contact: {cvData.profile.contact.email} | {cvData.profile.contact.phone}</p>
        <h3>Education</h3>
        {cvData.education.map((edu: any, index: number) => (
          <div key={index}>
            <p>{edu.degree.value} in {edu.degree.name.value} from {edu.institution.value}</p>
            <p>Grade: {edu.grade.value}</p>
            <p>{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
        <h3>Skills</h3>
        {cvData.skills.map((skill: any, index: number) => (
          <div key={index}>
            <h4>{skill.category.value}</h4>
            <ul>
              {skill.items.map((item: any, idx: number) => (
                <li key={idx}>{item.name} (Proficiency: {item.proficiency})</li>
              ))}
            </ul>
          </div>
        ))}
        <h3>Experience</h3>
        {cvData.experience.map((exp: any, index: number) => (
          <div key={index}>
            <h4>{exp.title} at {exp.company}</h4>
            <p>{exp.locationCity}, {exp.locationCountry}</p>
            <p>{exp.startDate} - {exp.endDate || 'Present'}</p>
            <p>{exp.description}</p>
            <ul>
              {exp.achievements.map((ach: any, idx: number) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
