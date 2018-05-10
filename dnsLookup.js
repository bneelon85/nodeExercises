var fs = require('fs');
var readline = require('readline');
var dns = require('dns');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Domain name? ", function(answer) {
  dns.lookup(answer, function (error, buffer) {
    if (error) {
        console.error(error.message);
        return;
    }
    
    var contents = buffer.toString();
    console.log('IP Address:'+contents);
    
})
  rl.close();
});
