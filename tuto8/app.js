//Date

let date = document.getElementById("date")
let day = new Date()//.getDay()
let options = {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'}
let fullDate = day.toLocaleString('eng-BE', options)
//date.innerHTML = day

//date.innerHTML = fullDate
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

weekday = weekday[new Date().getDay()]
console.log(weekday)
//getDate(), getDay(), getMonth(), getFullYear()

let date1 = document.getElementById("date1")
let dag = new Date().getDate()
console.log(dag)
let month = ["Jan","Feb","Mar","Apr","May","Jun"]
month = month[new Date().getMonth()]
console.log(month)

let year = new Date().getFullYear()
console.log(year)
date1.innerHTML = weekday + " " + dag + " " + month + " " + year
//command depending on the time differen tmessage in HTML
console.log(new Date().getMinutes())

// setInterval(function(){
//     date1.innerHTML = new Date().getSeconds()
// },1000)
let hour = new Date().getTime()
 console.log(hour)
// var current = new Date() 
// console.log(current)
// current.toLocaleTimeString()

//Math objects
let result = Math.random()
result = Math.random()
//result = (Math.round(result *10))
result = (Math.round(result *10)) + 1//result * 10(van 1 - 10)
//result = (Math.round(Math.random()*10))
console.log(result)

let toys = ["Ball","Lego","Cars", "Puzzels","playstations","Minecraft","monopoly","colors","badminton","tab"]
let kid = toys[Math.round(Math.random() *10)]
console.log(toys)
console.log(kid)
//functions


function test1(param1,param2,param3){
    return console.log(param1,param2,param3)
}
test1("Hello", 5, "😊")//for emoji windows sign + dot dign
test1("Hello", "Freddy", 10)

const test2 = (param4,param5)=>{
    console.log(param4,param5)
}   
test2("Hello", "Hello") 

let friendss = ["Ramba", "Reena", "Priti","Jaishree"]
function friends(friend){
    friendss.push(friend)
}
friends("Rashmi");
friends("Nidhi");
friends("Neha");
console.log(friendss)

let z;
let a = 5;
let b = 5;
function average (a,b){
  return z= (a+b)/2
}
//console.log(average(5,5))
average(a,b)
console.log(z)

//Filter

var students = [{
    id:1,
    name:"Jack",
    course:"Java",
    score:53
},
{
    id:2,
    name:"John",
    course:"HTML",
    score:42
},
{
    id:3,
    name:"Jooana",
    course:"CSS",
    score:30
},{
    id:4,
    name:"Shiela",
    course:"JavaScript",
    score:40
},
{
    id:5,
    name:"Harri",
    course:"Cloud",
    score:85
}
]
let passed =students.filter(diploma)
function diploma(scores){
    return scores.score >=50//to find th eperson who is fail, scores.score>=50
}
console.log(passed)
// map
// students.map((student)=>{
//     document.querySelector("#table>body").innerHTML +=
//     `<tr>
//     <td style="margin:20px; padding:20px; border: 2px solid black;">${student.id}</td>
//     <td style="margin:20px; padding:20px; border: 2px solid black;">${student.name}</td>
//     <td  style="margin:20px; padding:20px; border: 2px solid black;">${student.score}</td>
//     </tr>`
// })

//Events
let num1 = document.getElementById("num1")
console.log(Number(num1.value))
let num2 = document.getElementById("num2")
let sum;
let results = document.getElementById("results")
function bereken(){
    sum = Number(num1.value) + Number(num2.value)
    results.innerHTML = "The result is " + sum 
}
let counter = document.getElementById("counter")
let optellen = document.getElementById("optellen")
let aftrekken = document.getElementById("aftrekken")
let  count = 0
let reset = document.getElementById("reset")
optellen.addEventListener("click", function(){
count++
counter.innerHTML = count
console.log(count)

})