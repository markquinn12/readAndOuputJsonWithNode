var fs = require("fs");
var tableName = process.argv.slice(2);

if(tableName == null || tableName == '')
{
      tableName = "DEFAULT_TABLE"  
      console.log('Table name not passed as argument to script. Will insert DEFAULT_TABLE into script'); 
}
else
{
      console.log('Table name: ' +tableName ); 
}

var exportedData = require('./input.json');
var items = exportedData.items;
var entireOutput = '';

for (var itemKey in items) {
      var stringToOutput = '<';
      stringToOutput += tableName;

      var object = items[itemKey];
      for (var objectKey in object) {
            stringToOutput += ' ';
            stringToOutput += objectKey.toUpperCase();
            stringToOutput += '=';
            stringToOutput += '"' + object[objectKey] + '"';
      }

      stringToOutput += "/>\n";
      entireOutput += stringToOutput;
}

fs.writeFile('output.txt', entireOutput, function (err) {
  if (err) throw err;
  console.log('File created: output.txt');
});