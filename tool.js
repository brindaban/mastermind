var module = {};
exports.module = module;
module.giveSecretCode = function(){
	var secret = [];
	var code = 5;
	var numbers = 7;
	for(i=0; i < code; i++){
		secret[i] = Math.floor(Math.random()*numbers+1);
	}
	return secret;
};

module.isValidGuesses = function(usermove){
	var response=false;
	var usermoveInArray=usermove.split(' ');
	if(usermoveInArray.length==5&&usermoveInArray.join('').length==5&&usermoveInArray.join('').replace(/[1-7]/gi,"").length==0)
		response = true;
	if(response==false)
		console.log('WRONG INPUT: PLEASE PROVIDE PROPERLY');
	return response;
};

module.compareGuess = function(secrets,guesses){
	var red = 0; //right color, right position
	var green = 0; //right color, wrong position
	var guessedCode=[];
	var secretCode = [];
	var code = secrets.length; //converts code to a number type
	for (i=0; i<code; i++){
		guessedCode[i] = false;
		secretCode [i]= false;
	};
	for (i=0; i<code; i++){
		guesses[i] = guesses[i] *1;
		if (guesses[i] == secrets[i] &&
			guessedCode[i] == false && 
			secretCode[i] == false){
			red++;
			guessedCode[i] = true;
			secretCode[i] = true;
		}
	}
	for(i=0; i<code; i++){
		for (j=0; j<code; j++){
			if (guesses[i] == secrets[j] &&
				guessedCode[i] == false && secretCode[j] == false){
				green++;
				guessedCode[i] = true;
				secretCode[j] = true;
			}
		}
	}
	return {red:red, green:green};
};

module.isTerminate = function(secretCode,result,count){
	if(result.red==secretCode.length){
			console.log('\tCONGRAGULATIONS !!!!\nat last you WON!!! in',count,
				'\tsteps\n\tSecret code is:',secretCode.join(' '));
			process.exit(0); 
		}
		if(count==12){
			console.log('SORRY!!! your all chances are over...\n\tSecret code is:',secretCode.join(' '));
			process.exit(0);
		}
};

module.startingNotification = function(){
	console.log('\t\tyou are using ',5,'digits\t\twhich contains numbers from 1 -',7,
			'\n\t\tred : for correct number and correct position',
			'\tgreen : for correct number and wrong position');
};
