var lib = require('./tool.js').module;
var print = require('./newAxel.js');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var secretCode = lib.giveSecretCode();

var operation = function(secretCode){
	var storeGuesses={};
	var storeResult={};
	print.printStructer();
	lib.startingNotification();
	var count = 0;
	rl.on('line',function(userMove){
		if(lib.isValidGuesses(userMove)){
			count++;
			var result =lib.compareGuess(secretCode,userMove.split(' '));
			storeGuesses[count]=userMove;
			storeResult[count]=result;
			print.printResult(storeGuesses,storeResult);
			lib.isTerminate(secretCode,result,count);
		}
	});
};
operation(secretCode);