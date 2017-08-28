var Shape = require("./Shape.js");

function Pentagon(sideOne, sideTwo, sideThree, SideFour, SideFive)
{
	this.type = "Pentagon";
	this.sideOne = sideOne;
	this.sideTwo = sideTwo;
	this.sideThree = sideThree;
	this.SideFour = SideFour;
	// this.sideFive = sideFive;

}

Pentagon.prototype = new Shape();


module.exports = Pentagon;