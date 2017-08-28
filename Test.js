var Triangle = require("./Triangle.js");
var Square = require("./Square.js");
var Pentagon = require("./Pentagon.js");
var Shape = require("./Shape.js");

var triangle = new Triangle(1, 2, 3);
var square = new Square(4);
var pentagon = new Pentagon(1, 2, 3, 4, 5);
var shape = new Shape();

console.log(triangle.get_type());
console.log(square.get_type());
console.log(pentagon.get_type());
console.log(shape.get_type());

