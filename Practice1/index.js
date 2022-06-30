console.log("Hello")

let persons = [
   {name: "Mark",
    age: "25",
    place: "Diegem"
    
},
{
    name: "Robin",
    age: "25-6",
    place: "Machelen"
    
},
{
    name: "Harry",
    age: "29",
    place: "Zaventem"
},
]
persons.map((person)=>{
document.querySelector("#table>tbody").innerHTML =+
`<tr>
<td>${person.name}<td>
<td>${person.age}<td>
<td>${person.place}<td>
</tr>`
})