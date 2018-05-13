var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputFileName;
var outputFileName;

rl.question("What is the input file name? ", function(inpt) {
    inputFileName = inpt;
    console.log("Input file: ", inpt);
    rl.question("What is the output file name? ", function(otpt) {
        outputFileName = otpt;
        console.log("Output file: ", otpt);
        rl.close();
        fs.readFile(inputFileName, function(error, buffer) {
            if (error) {
                console.error(error.message);
                return;
            }
            var contents = buffer.toString();
            var upper = contents.toUpperCase().split('').join('');
            console.log(upper);
            fs.writeFile(outputFileName, upper, function(error) {
                if (error) {
                    console.error(error.message);
                    return;
                }

                console.log('File Save: ', outputFileName);
            });

        });

    });
});
