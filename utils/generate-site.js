const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve,reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      //if theres an error, reject the promise and send to catch
      if (err) {
        reject(err);
        //return out of the function to avoid resolve statement
        return;
      }

      //if everything went well, resolve the promise and send the data to .then
      resolve({
        ok: true,
        message: 'File Created!'
      });
    })
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Stylesheet created!'
      });
    });
  });
};

module.exports = {writeFile, copyFile};