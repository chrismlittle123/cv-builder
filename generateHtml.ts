import fs from 'fs';
import path from 'path';

// Read JSON data from data.json
const jsonData = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');
const data = JSON.parse(jsonData);

interface CVData {
  // Define the structure of the JSON data here
  name: string;
  title: string;
  // Add more fields as needed
}

const cssStyles = `
/* Add styles here */
`;

export function generateHTML(data: any): string {
  const educationSection = data.education.map((edu: any) => `
    <div>
      <h3>${edu.degreeName} in ${edu.type}</h3>
      <p>${edu.institution}</p>
      <p>${edu.startDate} - ${edu.endDate}</p>
      <p>Grade: ${edu.grade}</p>
    </div>
  `).join('');

  const skillsSection = data.skills.map((skill: any) => `
    <div>
      <h3>${skill.category}</h3>
      <ul>
        ${skill.items.map((item: any) => `<li>${item.name} (Proficiency: ${item.proficiency})</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const experienceSection = data.experience.map((exp: any) => `
    <div>
      <h3>${exp.title} at ${exp.company}</h3>
      <p>${exp.locationCity}, ${exp.locationCountry}</p>
      <p>${exp.startDate} - ${exp.endDate || 'Present'}</p>
      <p>${exp.description || ''}</p>
      <ul>
        ${exp.achievements.map((ach: string) => `<li>${ach}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8"/>
<title>${data.profile.name} - ${data.profile.title}</title>
<style type="text/css">
${cssStyles}
</style>
</head>
<body>
<h1>${data.profile.name}</h1>
<h2>${data.profile.title}</h2>
<p>Email: ${data.profile.contact.email}</p>
<p>Phone: ${data.profile.contact.phone}</p>

<h2>Education</h2>
${educationSection}

<h2>Skills</h2>
${skillsSection}

<h2>Experience</h2>
${experienceSection}

</body>
</html>`;
}

// Generate HTML from data.json
const htmlContent = generateHTML(data);
fs.writeFileSync('output.html', htmlContent); 