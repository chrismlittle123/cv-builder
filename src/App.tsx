import React from 'react';
import './App.css';
import cvData from './data/cvData.json';

function App() {
  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-blue-700 text-white text-center py-8">
          <h1 className="text-5xl font-extrabold">{cvData.profile.name}</h1>
          <h2 className="text-3xl font-semibold mt-2">{cvData.profile.title}</h2>
          <p className="mt-4 text-lg">Contact: {cvData.profile.contact.email} | {cvData.profile.contact.phone}</p>
        </header>
        <div className="p-8">
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">Education</h3>
            {cvData.education.map((edu: any, index: number) => (
              <div key={index} className="mt-6">
                <p className="text-lg font-medium text-blue-700">{edu.degree.name.value}</p>
                <p className="text-blue-600">{edu.institution.value}</p>
                <p className="text-blue-500">Grade: {edu.grade.value}</p>
                <p className="text-blue-500">Start: {edu.startDate} - End: {edu.endDate}</p>
              </div>
            ))}
          </section>
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">Experience</h3>
            {cvData.experience.map((exp: any, index: number) => (
              <div key={index} className="mt-6">
                <h4 className="text-xl font-semibold text-blue-700">{exp.title} at {exp.company}</h4>
                <p className="text-blue-600">{exp.locationCity}, {exp.locationCountry}</p>
                <p className="text-blue-500">{exp.startDate} - {exp.endDate || 'Present'}</p>
                <p className="text-blue-600 mt-2">{exp.description}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.achievements.map((ach: any, idx: number) => (
                    <li key={idx} className="text-blue-600">{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">Skills</h3>
            {cvData.skills.map((skill: any, index: number) => (
              <div key={index} className="mt-6">
                <h4 className="text-lg font-medium text-blue-700">{skill.category.value}</h4>
                <ul className="list-disc list-inside">
                  {skill.items.map((item: any, idx: number) => (
                    <li key={idx} className="text-blue-600">{item.name} (Proficiency: {item.proficiency})</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
