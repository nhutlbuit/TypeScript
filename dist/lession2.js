// Based on ES6
console.log("Hello World");
function greetPerson(name) {
    /** let to declare a new variable */
    var greet;
    if (name == "A") {
        greet = " Hello A";
    }
    else {
        greet = "Hello B";
    }
    console.log(greet);
}
greetPerson("A");
function foreach() {
    var _loop_1 = function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    };
    for (var i = 1; i <= 5; i++) {
        _loop_1(i);
    }
}
foreach();
/// constant declare
var Acon = 10;
console.log("constant is " + Acon);
var objectNew = {
    username: "a",
    pas: "apas"
};
console.log("object userName  is " + objectNew.username);
///let has scope in a block. Var has goabol
/// arrow function
var arrowFunction = function (aR, bR) { return 20000 + aR - bR; };
console.log("used arrow function: " + arrowFunction(100, 100));
/// using this key word
var employee = {
    name: "Nam",
    usingThis: function () {
        var thisFt = this;
        console.log(thisFt.name);
    }
};
employee.usingThis();
/// 11. rest parameter
var restParameter = function (message) {
    var param = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        param[_i - 1] = arguments[_i];
    }
    console.log(param);
};
restParameter(undefined, 'red', 'kem');
restParameter('red', 'blue');
restParameter('red', 'kem');
/// 12. Spread operator - convert avariable to -array
///13. destrucring array -- covert array to variable
var employeeArray = ['a', 'b', 'c'];
var emp1 = employeeArray[0], emp2 = employeeArray[1], emp3 = employeeArray[2];
console.log("-emp1:" + emp1 + " -emp2: " + emp2 + " -emp3:" + emp3);
///14. destrucring object
var employeeObject = {
    firtsName: "Infomation",
    lastName: "Technology"
};
var FistName = employeeObject.firtsName, LName = employeeObject.lastName;
console.log("-firstname: " + FistName + " -lastName: " + LName);
/// 15. String template
var nameMsg = "Nam";
var msg = "hello " + nameMsg;
var msg2 = "hello  " + msg + "\n        , this is learning typeScript";
console.log(msg + msg2);
/// 16. For of loop in ES6
var colorNames = ['red', 'blue', 'balck', 'yellow'];
for (var index in colorNames) {
    console.log(colorNames[index]);
}
/// as same foreach in java
for (var _i = 0, colorNames_1 = colorNames; _i < colorNames_1.length; _i++) {
    var item = colorNames_1[_i];
    console.log(item);
}
var tech = "Technology";
for (var _a = 0, tech_1 = tech; _a < tech_1.length; _a++) {
    var te = tech_1[_a];
    console.log(te);
}
//// 17. declaring classes
var Person = /** @class */ (function () {
    function Person() {
        this.namePerson = "a";
    }
    Person.prototype.run = function () {
        console.log("console run function in person classs");
    };
    return Person;
}());
var p1 = new Person();
console.log(p1);
console.log(typeof p1);
console.log(typeof Person);
console.log(p1.run());
/// 18. class body and  methods
var xehoi = /** @class */ (function () {
    function xehoi(_2banh) {
        this._2banh = _2banh;
    }
    xehoi.costur = function () {
        console.log("static block");
    };
    return xehoi;
}());
var xh = new xehoi("banh");
console.log(xh);
console.log(xehoi.costur());
