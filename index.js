// Import required modules: 'fs' to write the file
// Import 'inquirer' for user prompts
// Import the shapes object from the shapes.js file
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');


//This function will take all the information from the user and create the SVG file
// the const shapeTemplate will take the shape from the shapes object and replace the ShapeColor with the color from the user
function generateSVG(text, textColor, shape, shapeColor) {
  const shapeTemplate = shapes[shape].replace('ShapeColor', shapeColor);
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeTemplate}
      <text x="150" y="150" font-size="60" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>
  `;

//This will write the SVG file to the disk and send a message in the console. Using writeFileSync instead of writeFile because writeFile is asynchronous and we want to wait for the file to be written before sending the message to the console. Altought, if an error, it could hold up the code. But in this case, it is just a console log. Use with caution.
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

// This async function named main, will prompt the user for input and then will "await" the answers in order to call the generateSVG function
async function genlogo() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: input => input.length <= 3
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color keyword or hexadecimal number:'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color keyword or hexadecimal number:'
    }
  ]);
// This will call the generateSVG function with the answers from the user passing the text, textColor, shape and shapeColor
  generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  console.log(("generateSVG answers",answers.text, answers.textColor, answers.shape, answers.shapeColor))
}
// Call the main function to start the program when Index.js is run
genlogo();

// Launch genlogo function, which will prompt the user for input, then will await answers from inquirer, then will call the generateSVG function with the answers from the user to create the SVG file and then writeFileSync will write the SVG file to the disk and send a message in the console