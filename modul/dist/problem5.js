"use strict";
{
    var getProperty = function (obj, key) {
        return obj[key];
    };
    var person = {
        name: "Alice",
        age: 30
    };
    var result = getProperty(person, "name");
    console.log(result);
}