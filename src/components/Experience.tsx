import React from 'react';

interface ExperienceProps {
  experience: Array<{
    title: string;
    company: string;
    locationCity: string;
    locationCountry: string;
    startDate: string;
    endDate: string | null;
    description: string | null;
    achievements: string[];
  }>;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="experience">
      <h2 className="text-2xl font-semibold">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{exp.title} at {exp.company}</h3>
          <p>{exp.locationCity}, {exp.locationCountry}</p>
          <p>{exp.startDate} - {exp.endDate || 'Present'}</p>
          <p>{exp.description || ''}</p>
          <ul className="list-disc pl-5">
            {exp.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience; 