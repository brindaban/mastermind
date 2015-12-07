// // var Making = function(real,imaginary){
// // 	this.real = real;
// // 	this.imaginary = imaginary;
// // };
// // var firstComplex = new Making(4,2);
// // var secondComplex = new Making(2,3)
// // console.log('firstComplex no is: ',firstComplex.real,'+',firstComplex.imaginary,'i');
// // console.log('secondComplex no is: ',secondComplex.real,'+',secondComplex.imaginary,'i');


// function inherit(p){
// 	if(p==null)
// 		throw TypeError();
// 	if(Object.create)
// 		return Object.create(p);
// 	var t = typeof p;
// 	if(t!='object' && t!='function')
// 		throw TypeError();
// 	function f() {};
// 	f.prototype = p;
// 	return new f();
// };
// var o = {w:20};
// var p = inherit(o);
// p.a=12;
// var q = inherit(p);
// q.b = 11;
// var add = q.w+q.b;
// console.log(q.__proto__)
// console.log(q)
// console.log(add)

var p ={x:1,y:1,get r() {
	return Math.sqrt(this.x*this.x+this.y*this.y)},
	set r(newvalue){
		var oldvalue = Math.sqrt(this.x*this.x+this.y*this.y);
		var ratio = newvalue/oldvalue;
		this.x *= ratio;
		this.y *= ratio;
	},
	get theta(){return Math.atan2(this.y,this.x)}
};
console.log(p)