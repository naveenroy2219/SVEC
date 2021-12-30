// const name="Naveen";
// var age=20;

// if(age>18){
//     let name="Naveen A";
//     name="Ravi";
//     console.log(name);
// }

// console.log(name);

//Anonymous function

// let demo= function (x,y){
//     return x+y
// }
// console.log(demo(3,4))
let employees=["Naveen","Gova","Sunil"]
let result=employees.map((element,index)=>{
    return element+" K"+index
})
console.log(employees)
console.log(result)