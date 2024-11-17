"use strict";
{
    var validateKeys = function (obj, keys) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    };
    var person = { name: "Alice", age: 25, email: "alice@example.com" };
    var V_key = validateKeys(person, ["name", "age"]);
    console.log(V_key);
}
