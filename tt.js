var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line',function(input){
	console.log(input)
})