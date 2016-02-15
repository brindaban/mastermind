var giveSecretCode = function(){
	var secret = [],code = 5,numbers = 7;
	for(i=0; i < code; i++){
		secret[i] = Math.floor(Math.random()*numbers+1);
	}
	return secret;
};
var Game = function(){
    this.secretCode = giveSecretCode();
    console.log(this.secretCode);
    this.storeGuesses = {};
    this.storeResult = {};
}

module.exports = Game;
