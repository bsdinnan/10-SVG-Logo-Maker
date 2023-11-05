const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

const shapes = [Triangle, Circle, Square];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: function (input) {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color name or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: shapes.map((shape) => shape.name),
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color name or hexadecimal):',
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    const shapeClass = shapes.find((s) => s.name === shape);

    const svg = generateSVG(text, textColor, shapeClass, shapeColor);

    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

function generateSVG(text, textColor, shapeClass, shapeColor) {
    const svgShape = new shapeClass();
    svgShape.setColor(shapeColor);
    const svgShapeCode = svgShape.render();
  
    const svgText = `<text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="30" fill="${textColor}">${text}</text>`;

    const svgFilePath = path.join(__dirname, 'dist', 'logo.svg');

    fs.writeFileSync(svgFilePath, `<svg width="300" height="200">${svgShapeCode}${svgText}</svg>`);
      
    return;
  }
  
  
  
  
  