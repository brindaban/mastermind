var ctx = require('axel');
var readline = require('readline');
var output = process.stdout;
var printResult=function(inp,out){ 
	printGusses(inp);
	printOutput(out);
	ctx.fg(255,255,255)
	readline.cursorTo(output,3,30);
};

var printStructer = function(){
	ctx.clear();
	printBoard();
	printOptions();
	printChances();
	printLinesForSeparation();
	ctx.fg(255,255,255)
	readline.cursorTo(output,3,30);
}

var printBoard = function(){
	ctx.bg(255,255,255);                 
	ctx.box(25,1,80,29);
};

var printOptions = function(){
	ctx.fg(0,0,0);
	ctx.text(26,2,'chances')
	ctx.text(47,2,'MY GUESSES');
	ctx.text(84,2,'RESULT');
};

var printLinesForSeparation = function(){
	ctx.fg(0,0,0);
	ctx.text(25,4,'--------------------------------------------------------------------------------');
	ctx.bg(0,0,0);//line colour
	ctx.line(70,1,70,30)
	ctx.line(35,1,35,30);
};

var printChances = function(){
	var y_axis=6;
	for(var i=1;i<=12;i++){
		ctx.fg(0,0,0);
		ctx.text(29,y_axis,i.toString());
		y_axis+=2;
	}
};

var printGusses = function(inp){
	var x_axis=40,y_axis=6
	var inputKeys=Object.keys(inp);
	for(var i=0;i<inputKeys.length;i++){
		x_axis=40;
		var inputArray = inp[inputKeys[i]];
		for(var j=0;j<inputArray.length;j++){
			ctx.fg(0,0,0);
			ctx.text(x_axis,y_axis,inputArray[j].toString());
			x_axis+=3;
		}
		y_axis+=2
	};
};

var printOutput = function(out){
	var y_axis=6,x_axis=73;
	var inputKeys=Object.keys(out);
	for(var i=0;i<inputKeys.length;i++){
		x_axis=73;
		var redLength = out[inputKeys[i]].red;
		for(var j=0;j<redLength;j++){
			ctx.fg(255,0,0);
			ctx.text(x_axis,y_axis,'О');
			x_axis+=7;
		}
		var greenLength = out[inputKeys[i]].green;
		for(var j=0;j<greenLength;j++){
			ctx.fg(0,170,0);
			ctx.text(x_axis,y_axis,'О');
			x_axis+=7;
		}
		y_axis+=2;
	}
};

exports.printStructer = printStructer;
exports.printResult = printResult;