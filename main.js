"use strict";
exports.__esModule = true;
var message = "Welcome Back!";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "Const must be initialized, let does not have to be initialized";
var isBeginner = true;
var total = 0;
var name = "Brock";
var sentence = "My name is " + name + " I am a beginner in TypeScript.";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Brock", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Brock';
var myVariable = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
var myVariable2 = 10;
myVariable2.toUpperCase();
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var multiType;
multiType = 20;
multiType = true;
