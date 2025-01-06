import React from 'react';
import './App.css';
import cvData from './data/cvData.json';

function App() {
  const getMonthName = (month: number) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month - 1];
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="text-center py-4">
          <h1 className="text-lg font-bold text-blue-900">{cvData.profile.name} - {cvData.profile.title}</h1>

          <p className="text-xs text-gray-500 mt-2">{cvData.profile.contact.email} | {cvData.profile.contact.phone}</p>
        </header>
        <div className="p-8 flex flex-col md:flex-row">
          <div className="md:w-1/3 md:pr-4">
            <section className="mb-12">
              <h4 className="text-base font-bold text-blue-900 border-b-2 border-blue-400 pb-2">Education</h4>
              {cvData.education.map((edu: any, index: number) => (
                <div key={index} className="mt-6">
                  <p className="text-xs text-blue-900"><span className="font-bold">{edu.institution.value}</span></p>
                  <p className="text-xs text-blue-900">{edu.degree.type.value} {edu.degree.name.value}</p>
                  <p className="text-xs text-blue-900">{edu.grade.value}</p>
                  <p className="text-xs text-blue-900">{`${getMonthName(edu.startDate.month)} ${edu.startDate.year} - ${getMonthName(edu.endDate.month)} ${edu.endDate.year}`}</p>
                </div>
              ))}
            </section>
            <section className="mb-12">
              <h4 className="text-base font-bold text-blue-900 border-b-2 border-blue-400 pb-2">Skills</h4>
              {cvData.skills.map((skill: any, index: number) => (
                <div key={index} className="mt-6">
                  <h4 className="text-xs font-bold text-blue-900 mb-2">{skill.category.value}</h4>
                  <ul className="list-disc list-inside">
                    {skill.items.map((item: any, idx: number) => (
                      <li key={idx} className="text-xs text-blue-900">
                        {item.name} 
                        <span className="text-orange-700 text-[0.6rem]"> {'★'.repeat(item.proficiency)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
          <div className="md:w-2/3 md:pl-4">
            <section className="mb-12">
              <h4 className="text-base font-bold text-blue-900 border-b-2 border-blue-400 pb-2">Experience</h4>
              {cvData.experience.map((exp: any, index: number) => (
                <div key={index} className="mt-6">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">{exp.title} at  {exp.company}</h4>
                  <p className="text-xs text-gray-500">{exp.locationCity}, {exp.locationCountry} | {getMonthName(exp.startDate.month)} {exp.startDate.year} - {exp.endDate ? `${getMonthName(exp.endDate.month)} ${exp.endDate.year}` : 'Present'}</p>
                  {exp.description && (
                    <p className="text-xs text-blue-900 mt-2">{exp.description}</p>
                  )}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-2">
                      {exp.achievements.map((ach: any, idx: number) => (
                        <p key={idx} className="text-xs mt-1"><span className="font-bold text-blue-900">{ach.title}</span><span className="text-blue-900">: {ach.description}</span></p>
                      ))}
                    </div>
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
