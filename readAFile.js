var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the file name? ", function(answer) {
  fs.readFile(answer, function (error, buffer) {
    if (error) {
        console.error(error.message);
        return;
    }
    
    var contents = buffer.toString();
    console.log(contents.toUpperCase().split('').join(''));
    
})
  rl.close();
});

