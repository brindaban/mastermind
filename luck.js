// var object = {
// 	data_prop:1,
// 	get accessor_prop(){
// 		console.log("am here");
// 		return this.data_prop;}, 
// 	// set accessor_prop(value){
// 	// 	if(value<0)
// 	// 		throw("wrong data");
// 	// 	data_prop=value;}

// };
// console.log(Object.keys(object));
// var o1 = Object.create(object);
// o1.accessor_prop = 3;
// console.log(o1.accessor_prop);
// console.log(o1.$data_prop);

// var a=Object.create({name:"sasa",class:"asasas"})
// a.abc="xyz";
// console.log(a.__proto__);

// var a1 = Object.create(a);
// console.log(a1.__proto__);
// console.log(a1.prototype);

// var a={}
// console.log(a.toStrin)

// var fn=function(name,marks){
// 	this.name=name;
// 	this.marks=marks;
// }

// fn.prototype={
// 	isToper:function(){
// 		return this.marks>90;
// 	}
// }

// var navya=new fn("navya",80);
// console.log(navya.isToper.toString());

// var a=new Array(10);
// for(var i=0;i<a.length;i++){
// 	a[i]=new Array(10).join("*\v");
// }
// console.log(a.join("\n"));


// console.log("jitu\vbhai\vof\vnavya")
// function f(y){console.log("here"); return this.x+y;}
// var o={x:1};
// var o1={x:4,y:2};
// var g=f.bind(o);
// var g1=f.bind(o1);

// console.log(g(2));
// console.log(g1(12));

// console.log(o);
// console.log(o.__proto__);

// console.log(o1);
// console.log(o1.__proto__);

// var f = function(a,b){
// 	console.log('its comming here '+a);
// 	return this.x+a+b;
// };
// var array = {x:1};
// console.log(f.call(array,1,2));

var a=function(){
	return Math.max.apply({},arguments)
};

console.log(a(1,2,3,4,5))








