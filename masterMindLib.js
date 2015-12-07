var module = {};
exports.module = module;
//sets up an array of numbers that will be the secret code
// code is the number of digits, numbers is the integers used for each digit
module.setSecretCode = function(data){
	var secret = [];
	var code = +data[0];
	var numbers = +data[1];
	for(i=0; i < code; i++){
		secret[i] = Math.floor(Math.random()*numbers+1);
	}
	return secret; // returns result to be used going forward
};
module.compareGuess = function(secrets,guesses){
	var green = 0; //right color, right position
	var yellow = 0; //right color, wrong position
	var guessedAlready=[];
	var secretedAlready = [];
	var code = secrets.length; //converts code to a number type
	for (i=0; i<code; i++){
		guessedAlready[i] = false;
		secretedAlready [i]= false;
	};
	for (i=0; i<code; i++){
		guesses[i] = guesses[i] *1;
		if (guesses[i] == secrets[i] &&
			guessedAlready[i] == false && 
			secretedAlready[i] == false){
			green++;
			guessedAlready[i] = true;
			secretedAlready[i] = true;
		}
	}
	for(i=0; i<code; i++){
		for (j=0; j<code; j++){
			if (guesses[i] == secrets[j] &&
				guessedAlready[i] == false && secretedAlready[j] == false){
				yellow++;
				guessedAlready[i] = true;
				secretedAlready[j] = true;
			}
		}
	}
	return {green:green, yellow:yellow};
};
module.isTerminate = function(secretCode,result,count){
	if(result.green==secretCode.length){
			console.log('\tCONGRAGULATIONS !!!!\nat last you WON!!! in',count,
				'steps\n\tSecret code is:',secretCode.join(' '));
			process.exit(0); 
		}
		if(count==12){
			console.log('SORRY!!! your all chances are over...\n\tSecret code is:',secretCode.join(' '));
			process.exit(0);
		}
};

var causion = function(){
	console.log('\t\tSORRY!!\n\tplease restart the game again with below',
				 'information\ncausion:\n\tyour selection of digits should',
				  'lie between 4 and 9\n\t\tnumbers should lie between 5', 
				  'and 9\n\tSYNTAX: masterMind.js digits numbers'); 
};

module.acceptUserData = function(digits,numbers){
	if(digits>9 || digits<4 || numbers>9 || numbers<5 || digits==undefined || numbers==undefined){
		causion();
		process.exit(0);
	}
};

module.rules = function(){
	console.log('\t\tThis is MASTER MIND game with NUMBERS',
				'\n\tRules : There are three levels in this game',
				'\n\t1.Easy, 2.Moderate and 3.Difficult',
				'\n The number of digits and numbers you are going to play is displayed after',
				'\n selecting the level of game.',
				'\n\t Based on your guessed numbers you will get two color indications',
				'\n\t\tgreen : for correct number and correct position and',
				'\n\t\tyellow : for correct number and worng position.',
				'\n\tSelect level...');
};

module.giveDigitsNumbers = function(level){
	var level = level.toLowerCase();
	switch(level){
		case 'easy' : return {digits:4, numbers:5};
					  break;
		case 'moderate' : return {digits:5, numbers:7};
						  break;
		default : return {digits:6, numbers:9};
				  break;
	}
};

module.information = function(data){
	console.log('\tyou are using ',data.digits,'digits\n\twhich contains ',
		'numbers from 1 -',data.numbers,'\nstart GUESSING\tyou have only 12 chances');
};
