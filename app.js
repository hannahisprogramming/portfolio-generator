// printProfileData(profileItem);

// const profileDataArgs = process.argv.slice(2);

// const printProfileData = profileDataArr => {
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);


const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ]);
};

promptUser().then(answers => console.log(answers));
// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
