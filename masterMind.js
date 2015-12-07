var lib = require('./masterMindLib.js').module;
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var digits = process.argv[2];
var numbers = process.argv[3];

lib.acceptUserData(digits,numbers);
var secretCode = lib.setSecretCode(process.argv.slice(2));

console.log('\tyou are using ',digits,'digits\n\twhich contains numbers from 1 -',numbers,
			'\nstart GUESSING\tyou have only 12 chances');
var operation = function(secretCode){
	var count = 0;
	rl.on('line',function(userMove){
		count++;
		var result =lib.compareGuess(secretCode,userMove.split(' '));
		lib.isTerminate(secretCode,result,count);
		console.log(result,12-count,'chances left');
	});
};
operation(secretCode);

