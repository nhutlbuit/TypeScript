// Based on ES6
console.log("Hello World");
function greetPerson(name){
    /** let to declare a new variable */
    let greet;
    if( name == "A"){
        greet = " Hello A";
    }else{
        greet = "Hello B";
    }
    console.log(greet);
}
greetPerson("A");

function foreach(){
    for (let i =1; i<= 5; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
       
    }
}

foreach();

/// constant declare
const Acon = 10;
console.log("constant is "+ Acon);

const objectNew = {
    username :"a",
    pas :"apas"
};

console.log("object userName  is "+ objectNew.username);


///let has scope in a block. Var has goabol

/// arrow function
let arrowFunction = (aR:number, bR:number)=> 20000+ aR-bR;
console.log("used arrow function: "+arrowFunction(100,100));

/// using this key word
var employee = {
     name : "Nam",
     usingThis : function() {
         var thisFt = this;
        console.log(thisFt.name)
     }  
}
employee.usingThis();

/// 11. rest parameter
let restParameter = function(message,...param:string[]){
    console.log(param);
}
restParameter(undefined, 'red', 'kem');
restParameter('red', 'blue');
restParameter('red', 'kem');


/// 12. Spread operator - convert avariable to -array

///13. destrucring array -- covert array to variable
var employeeArray = ['a', 'b', 'c'];
let [emp1, emp2, emp3] = employeeArray;
console.log("-emp1:"+emp1+" -emp2: "+emp2+" -emp3:"+emp3);

///14. destrucring object
let employeeObject =  {
    firtsName: "Infomation",
    lastName: "Technology"
}
let {firtsName: FistName, lastName: LName} = employeeObject;
console.log("-firstname: "+FistName+" -lastName: "+ LName);

/// 15. String template
var nameMsg = "Nam";
var msg = "hello "+ nameMsg;
var msg2 = 
        `hello  ${msg}
        , this is learning typeScript`;
console.log(msg+msg2);

/// 16. For of loop in ES6
var colorNames = ['red', 'blue', 'balck', 'yellow'];
for(let index in colorNames){
    console.log(colorNames[index]);
}
/// as same foreach in java
for(let item of colorNames){
    console.log(item);
}

var tech = "Technology"
for(let te of tech){
    console.log(te);
}

//// 17. declaring classes
class Person{
    namePerson = "a";
    run(){
        console.log("console run function in person classs");
    }
}
let p1 = new Person();
console.log(p1);
console.log(typeof p1);
console.log(typeof Person);
console.log(p1.run());

/// 18. class body and  methods
class xe4banh{
    constructor(_2banh){
        this._2banh = _2banh;
    }
    static costur(){
        console.log("static block");
        
    }
}

let xe4b = new xe4banh("banh");
console.log(xe4b);
console.log(xe4banh.costur());

//// inherid

class xehoiClass extends xe4banh{

}
let xhClass = new xehoiClass("");
/// 20. introduce module
/// 21. module loader setup



