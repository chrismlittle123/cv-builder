import React from 'react';
import './App.css';
import cvData from './data/cvData.json';

function App() {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="text-center py-4">
          <h1 className="text-xl font-bold text-blue-800">{cvData.profile.name}</h1>
          <h2 className="text-base font-semibold text-blue-700 mt-1">{cvData.profile.title}</h2>
          <p className="text-sm text-blue-600 mt-2">{cvData.profile.contact.email} | {cvData.profile.contact.phone}</p>
        </header>
        <div className="p-8 flex flex-col md:flex-row">
          <div className="md:w-1/3 md:pr-4">
            <section className="mb-12">
              <h3 className="text-lg font-bold text-blue-800 border-b-2 border-blue-300 pb-2">Education</h3>
              {cvData.education.map((edu: any, index: number) => (
                <div key={index} className="mt-6">
                  <p className="text-sm font-medium text-blue-800">{edu.degree.name.value}</p>
                  <p className="text-sm text-blue-800">{edu.institution.value}</p>
                  <p className="text-sm text-blue-800">Grade: {edu.grade.value}</p>
                  <p className="text-sm text-blue-800">Start: {edu.startDate.substring(0,7)}</p>
                  <p className="text-sm text-blue-800">End: {edu.endDate.substring(0,7)}</p>
                </div>
              ))}
            </section>
            <section className="mb-12">
              <h3 className="text-lg font-bold text-blue-800 border-b-2 border-blue-300 pb-2">Skills</h3>
              {cvData.skills.map((skill: any, index: number) => (
                <div key={index} className="mt-6">
                  <h4 className="text-sm font-medium text-blue-800">{skill.category.value}</h4>
                  <ul className="list-disc list-inside">
                    {skill.items.map((item: any, idx: number) => (
                      <li key={idx} className="text-sm text-blue-800">
                        {item.name} 
                        <span className="text-blue-500">
                          {' ★'.repeat(item.proficiency)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
          <div className="md:w-2/3 md:pl-4">
            <section className="mb-12">
              <h3 className="text-lg font-bold text-blue-800 border-b-2 border-blue-300 pb-2">Experience</h3>
              {cvData.experience.map((exp: any, index: number) => (
                <div key={index} className="mt-6">
                  <h4 className="text-base font-semibold text-blue-800">{exp.title} at {exp.company}</h4>
                  <p className="text-sm text-blue-800">{exp.locationCity}, {exp.locationCountry}</p>
                  <p className="text-sm text-blue-800">{exp.startDate.substring(0,7)} - {exp.endDate?.substring(0,7) || 'Present'}</p>
                  {exp.description && (
                    <p className="text-sm text-blue-800 mt-2">{exp.description}</p>
                  )}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside mt-2">
                      {exp.achievements.map((ach: string, idx: number) => (
                        <li key={idx} className="text-sm text-blue-800">{ach}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
