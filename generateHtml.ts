import fs from 'fs';

interface CVData {
  // Define the structure of the JSON data here
  name: string;
  title: string;
  // Add more fields as needed
}

export function generateHTML(data: CVData): string {
  return `<!DOCTYPE html>
<html xmlns=\"http://www.w3.org/1999/xhtml\">
<head>
<meta charset=\"utf-8\"/>
<title>${data.name} - ${data.title}</title>
<style type=\"text/css\">
/* Add styles here */
</style>
</head>
<body>
<h1>${data.name}</h1>
<h2>${data.title}</h2>
<!-- Add more HTML elements based on JSON data -->
</body>
</html>`;
}

// Example usage
const exampleData: CVData = {
  name: 'Christopher Little',
  title: 'Software Engineer',
  // Add more fields as needed
};

const htmlContent = generateHTML(exampleData);
fs.writeFileSync('output.html', htmlContent); 