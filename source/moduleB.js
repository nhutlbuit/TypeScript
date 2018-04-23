export default "dadada";
let a ="a";
let b ="b";
let objectC = {
    name : "Nam"
};
export{b,a, objectC};

/// export function and classs

export function great(msg){
    console.log("export function is : "+msg);
}

export class Employees {
    constructor(){
        console.log("contructor default in class Employees");
    }

    greating(msg){
        console.log("export function in class Employees : "+msg);
    }
}

 
 
