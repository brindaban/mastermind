var lib = require('./tool.js').module;
var print = require('./axel.js');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var secretCode = lib.giveSecretCode();

var operation = function(secretCode){
	var storeGuesses={};
	var storeResult={};
	print.printResult(storeGuesses,storeResult);
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
awsSecretKey=c64e8c79aacf5ddb02f1274db2d973f363f4f553ab1692d8d203b4cc09692f79 
