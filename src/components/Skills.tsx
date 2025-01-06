import React from 'react';

interface SkillsProps {
  skills: Array<{
    category: string;
    items: Array<{
      name: string;
      proficiency: number;
    }>;
  }>;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="skills">
      <h2 className="text-2xl font-semibold">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{skill.category}</h3>
          <ul className="list-disc pl-5">
            {skill.items.map((item, idx) => (
              <li key={idx}>{item.name} (Proficiency: {item.proficiency})</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills; 