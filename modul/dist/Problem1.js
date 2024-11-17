"use strict";
{
    var sumArray = ([1, 2, 3, 4, 5]);
    var result = sumArray.reduce(function (h1, h2) {
        return h1 + h2;
    });
    console.log(result);
}
