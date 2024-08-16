// // //start with class keyword  and the class name should start with capital letter
// // class Student {
// // constructor(id,name,studentClass,section){
// //     this.id=id,
// //     this.name=name,
// //     this.studentClass= studentClass,
// //     this.section=section
// // }

// // showClass(){
// //     return(this.studentClass);
// // }
// // calculateRank(){
// //     /////
// // }
// // top3Students(){
// //     /////
// // }
// // }

// // let stud123456 =  new Student('123456',"Fantahun Bishaw",5,'D') //  from front end > to database
// // let stud585858 =  new Student('585858',"Abebe Bishaw",12,'A')
// // console.log(stud123456);

// //   //creating object using object literal
// // //   let Grade1Student={
// // //     name1:"Abebe Kebede",
// // //     name2:"Fantahun Bishaw",
// // //     name3: "Meseret Defar"
// // //   }

// // //   let Grade2Student={
// // //     name1:"Kebede",
// // //     name2:"Fantahun bekele",
// // //     name3: "Meseret Abebe"
// // //   }

// // //   console.log(Grade1Student.name3);

// //   // using constructor as blue print
// // //   function Student(id,name,studentClass,section){
// // //     this.id=id,
// // //     this.name=name,
// // //     this.studentClass= studentClass,
// // //     this.section=section
// // //   }

// class Person {
//   constructor(fullName, gender) {
//     (this.fullName = fullName), (this.gender = gender);
//   }

//   printName(){
//     return this.fullName;
//   }
// }

// // child class inheriting properties of Person by extension
// class Student extends Person {
//    constructor(fullName,gender,studentClass){
//     super(fullName,gender)
//     this.studentClass=studentClass;

//    }

//     showClass(){
//         return this.studentClass;
//     }

// }

// let student1 = new Student("Fantahun Bishaw",'Male','12')
// console.log(student1);
// console.log(student1.printName());
// console.log(student1.showGender());


////  destructuring


const students = ["Sisay", "Hunde", "Sara",1,2,3,4,5]

// const firstStudent = students[0];
// const secondStudent = students[1]; name id   class section 
// const thirdStudent = students[2];

// console.log(firstStudent); // prints Sisay
// console.log(secondStudent); // prints Hunde
// console.log(thirdStudent); // prints Sara

// destructuring ...

let [,b,,,,f,,h] = students;

// console.log(a); // prints Sisay
console.log(b); // prints Hunde
console.log(f); 
console.log(h); 


let num1 =20;
let num2 =40;

[num1,num2]=[num2,num1]
// let temporaryVar = num1;//temp 20

// num1=num2;//40

// num2=temporaryVar;//20

console.log(num1); 
console.log(num2); 