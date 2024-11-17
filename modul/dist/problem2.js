"use strict";
{
    var numbers = [1, 2, 3, 2, 4, 1, 5];
    var removeDuplicates = function (array) {
        return array.filter(function (x, index) { return array.indexOf(x) === index; });
    };
    console.log(removeDuplicates(numbers));
}
