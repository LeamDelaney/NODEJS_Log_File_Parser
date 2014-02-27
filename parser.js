// Load the file system module
var fs = require('fs');

// Read the log file into memory
fs.readFile('xanthu_example_log.txt', function (err, logData)
{
    // If an error occurs, throw it and exit the application.
    if (err)
    {
        throw err;
    }
    // Convert the byte array buffer to a string.
    var text = logData.toString();

    var result = {};

    // Split the file up line by line
    var lines = text.split('\n');

    // For each line, separate out the elements of data.
    lines.forEach(function (line)
    {
        var columns = line.split(' ');
        var letter = columns[1];
        var count = parseInt(columns[2]);
    
        if (!result[letter])
        {
            result[letter] = 0;
        }
        result[letter] += parseInt(count);
    });

console.log(result);
});