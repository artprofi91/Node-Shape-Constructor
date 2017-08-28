var Shape = require("./Shape.js");

function Square(side)
{
	this.type = "Square";
	this.sideOne = side;
	this.sideTwo = side;
	this.sideThree = side;
	this.sideFour = side;
}

Square.prototype = new Shape();


module.exports = Square;