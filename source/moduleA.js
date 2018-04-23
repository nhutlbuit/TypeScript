import  fname  from "./moduleB.js";
console.log(fname);
import {b as firstname, a as lastName, objectC} from "./moduleB.js";
console.log(firstname);
console.log(lastName);
/// we can change properties of object but can't change that object
objectC.name = "Hoai";
console.log(objectC.name);

import  {great, Employees}  from "./moduleB.js";
console.log(great("fafa"));
let Employee = new Employees();
console.log(Employee.greating("ggagag"));