"use strict";
{
    var calculateShape = function (shape) {
        if (shape.shape === 'circle') {
            var circle_1 = Math.PI * Math.pow(shape.radius, 2);
            return circle_1;
        }
        else if (shape.shape === 'rectangle') {
            var rectangle_1 = shape.width * shape.height;
            return rectangle_1;
        }
        else {
            throw new Error('Invalid shape');
        }
    };
    var circle = calculateShape({ shape: 'circle', radius: 5 });
    var rectangle = calculateShape({ shape: 'rectangle', width: 10, height: 4 });
    console.log(circle);
    console.log(rectangle);
}
