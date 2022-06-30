let choose = document.getElementById("game")
let pc = document.getElementById("pcchoose")
let winner = document.getElementById("winner")
let ownchoice = document.getElementById("ownchoice")

let options = ["stone", "paper","scissor"]
let pointU = 0;
let pointPC = 0;

function result(){
    let pcchoose = Math.round(Math.random()*2)
    console.log(options[pcchoose])
    pc.innerHTML = `choosen by the computer: ${options[pcchoose]}`
    ownchoice.innerHTML = `your choice ${choose.value}`
}

if(choose.value == "paper" && options[pcchoose] == "paper"){
   winner.innerHTML += `<li> No winner, you have now ${pointU} point. </li>`
}
if (choose.value == "scissor" && options[pcchoose] == "paper"){
    winner.innerHTML += `<li> you loose,  you have now ${pointU} point. </li>`
}
if (choose.value == "scissor" && options[pcchoose] == "paper"){
    pointU ++
    winner.innerHTML += `<li> you win, you have now ${pointU} point. </li>`

}
if (choose.value == "paper" && options[pcchoose] == "steen") {
    pointU ++
    winner.innerHTML += `<li>jij wint, je hebt nu ${pointU} point.</li>`
  
}
if (choose.value == "stone" && options[pcchoose] == "stone") {
   winner.innerHTML += `<li>No winner, je hebt nu ${pointU} point. </li> `
}
if (choose.value == "scissor" && options[pcchoose] == "stone") {
    winner.innerHTML += `<li>jij verliest, je hebt nu ${pointU} point.</li>`
    pointPC ++
}
if (choose.value == "paper" && options[pcchoose] == "scissor") {
    winner.innerHTML += `<li>jij verliest, je hebt nu ${pointU} point.</li>`
   pointPC ++
}
if (choose.value == "stone" && options[pcchoose] == "scissor") {
    pointU ++
    winner.innerHTML += `<li>jij wint, je hebt nu ${pointU} point.</li>`
  
}
if (choose.value == "scissor" && options[pcchoose] == "scissor") {
    winner.innerHTML += `<li>No winner </li> `
}

console.log(choose.value)

// let itemList = document.getElementById("itemList")
// console.log(itemList.children)

// function toonItem(e){
//     console.log(e.firstChild.nextSibling.innerHTML)
//     for (let x = 0; x<itemList.children.length; x++){
//         console.log(itemList.children[x].firstChild.nextSibling.innerHTML)
//         if(itemList.children[x].lastChild.previousSibling.innerHTML == e.firstChild.nextSibling.innerHTML ){
//             itemList.children[x].lastChild.previousSibling.style.display = "block"
//         }else{
//             itemList.children[x].lastChild.previousSibling.style.display = "none"
//         }
     
//         }
    
//     }



