// console.log("hello")

// //objects
// let person = {
//     name: "John",
//     age: 25,
//     place: "Antwerpan"
// }
// console.log(person)
// console.log(person.name)
// console.log(`this person is ${person.name} and live in ${person.place}`)
// console.log("this person is "+ person.name + " and live in " + person.place + " and his age is " + person.age )

// let person2 = {
//     name: "John",
//     age: 25,
//     address: {
//        street: "Kosterstraat",
//        number: "61",
//        place: "Diegem"
//     } 
// }
// console.log(person2.address.street)

// //spread operator
// person2 = {...person2, email: "learning@gmail.com"}
// console.log(person2)

// document.querySelector("#data").innerHTML = person2.name
// document.querySelector("#table>tbody").innerHTML = 
// `<tr>
// <td style="padding:20px;border:2px solid black">${person2.name}<td>
// <td>${person2.age}<td>
// <td>${person2.address.place}<td>
// </tr>`

// //arrays
// let arr1 = [1,2,3,4,5]
// console.log(arr1)
// console.log(arr1[1])

// let arr2 = ["Hello","How","are","you?"]
// console.log(arr2)
// console.log(arr2[3])
// console.log(arr2.length)
// arr2[0] = "Hi"
// console.log(arr2)

// //Elements toevoegen to Array

// arr2 = [...arr2, "Marc"]
// console.log(arr2)
// arr2.push("Marrie")
// console.log(arr2)

//obejects in Array
// let students = [
//     {name:"Priyanka",
//      age:"20",
//     place:"Wilrijk"
//  },
//  {
//     name:"Hari",
//     age:"21",
//     place:"Mechelen"
//  },
//  {
//     name:"reena",
//     age:"22",
//     place:"Machelen"
//  }
// ]
// console.log(students)
// console.log(students[1].name)
// console.log(students.length)

// //for loop
// for(let i = 0; i<students.length; i++){
//     console.log(i)
//     console.log(students[i].name)
//     students[i].id = i
//     console.log(students)
// }fd

let students = [
    {name:"Priyanka",
     age:"20",
     email:"priyanka@yahoo.com",
     address:{
         street: "Statiosstraat",
         nuber:"5",
         place:"Wilrijk"
     }
   
 },
 {
    name:"Hari",
    age:"21",
    email:"Hari@yahoo.com",
    address:{
        street:"leopoldstraat",
        number:"25",
        place:"Mechelen"
    }
    
 },
 {
    name:"Reena",
    age:"22",
    email:"reena@gmail.com",
    address:{
        street:"watermolenstraat",
        number: "7",
        place:"Machelen"
    }
    
 }
]
for(let i = 0; i<students.length; i++){
    console.log(students[i].name)
    students[i].isStudent = true
}
console.log(students)

//Map
students.map((student) => {
    console.log(student)
console.log(`student ${student.name} is ${student.age} years old.`)
})

students.map((student)=>{
    document.querySelector("#table>tbody").innerHTML += 
    `<tr>
    <td style="margin:20px; padding:20px; border: 2px solid black;">${student.name}</td>
    <td style="margin:20px; padding:20px; border: 2px solid black;">${student.age}</td>
    <td  style="margin:20px; padding:20px; border: 2px solid black;">${student.address.place}</td>
    </tr>`
})