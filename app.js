// Include process module
const process = require('process');
  
// Printing process.argv property value
var profileItem = process.argv;

const printProfileData = profileDataArr => {
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileItem);