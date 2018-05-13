var readline = require('readline');
var request = require('request');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What URL do you want to save? ', function(url) {
    console.log('URL: ');
  request.get(url, function(error, response, html) {
    if (error) {
      console.log(error.message);
      return;
    }
    rl.question('Filename: ', function(filename) {
      rl.close();
      fs.writeFile(filename, html, function(error) {
        if (error) {
          console.log(error.message);
          return;
        }
        console.log('Saved page to ' + filename);
      });
    });
  });
});