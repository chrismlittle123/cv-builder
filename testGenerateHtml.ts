import { generateHTML } from './generateHtml';
import fs from 'fs';

// Define a test case
const testData = {
  name: 'Christopher Little',
  title: 'Software Engineer',
  // Add more fields as needed
};

const expectedHtml = fs.readFileSync('Christopher Little CV.html', 'utf-8');
const generatedHtml = generateHTML(testData);

if (generatedHtml === expectedHtml) {
  console.log('Test passed: Generated HTML matches the expected HTML.');
} else {
  console.error('Test failed: Generated HTML does not match the expected HTML.');
} 