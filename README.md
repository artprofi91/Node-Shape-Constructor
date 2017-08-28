# Node-Shape-Constructor

## Overview

I used prototypes to implement the Shape "class", and Triangle; Square; and Pentagon "subclasses". The `instanceof` operator should behave properly when used on instances of any of the three classes.

#### Shape constructor

Shape constructor has a property called type. I attached a function, called get_type such that any Shape is able to call it.

#### Triangle/Square/Pentagon constructors

The triangles set the properties sideOne, sideTwo, and sideThree for its side lengths.
The squares set the properties sideOne, sideTwo, sideThree, and sideFour for its side lengths.
The pentagons set the properties sideOne, sideTwo, sideThree, sideFour, and sideFive for its side lengths.

#### Main steps

1. Set the prototype of these objects equal to a new Shape().

2. Turn your attention to Shape.get_type. This function should return
   the type of the shape that it's called on--but only be defined on Shape.

   To do this, read about the Object.prototype.constructor property on MDN:

    <http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor>

   JavaScript sets a constructor property for you automatically. But, when
   you muck with the prototype chain, this default won't accurately
   represent which function created which object.


