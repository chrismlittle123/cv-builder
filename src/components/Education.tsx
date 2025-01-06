import React from 'react';

interface EducationProps {
  education: Array<{
    degreeName: string;
    type: string;
    institution: string;
    grade: string;
    startDate: string;
    endDate: string;
  }>;
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="education">
      <h2 className="text-2xl font-semibold">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{edu.degreeName} in {edu.type}</h3>
          <p>{edu.institution}</p>
          <p>{edu.startDate} - {edu.endDate}</p>
          <p>Grade: {edu.grade}</p>
        </div>
      ))}
    </div>
  );
};

export default Education; 