var Shape = require("./Shape.js");

function Triangle(sideOne, sideTwo, sideThree)
{
	this.type = "Triangle";
	this.sideOne = sideOne;
	this.sideTwo = sideTwo;
	this.sideThree = sideThree;

}

Triangle.prototype = new Shape();


module.exports = Triangle;