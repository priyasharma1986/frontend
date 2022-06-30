let box1 = document.querySelector(".mouseLeave")

function mouseEnter(){
    box1.style.width = "400px";
    box1.style.backgroundColor = "red"  
}

function mouseLeave(){
    box1.style.width = "300px";
    box1.style.backgroundColor = "yellow"
}

let box2 = document.querySelector(".mouseMove")
function mouseMove(e){
    var x = e.clientX;
    var y = e.clientY;
    box2.innerHTML = `de mouse bevindt zich op x ${x} en y ${y}`
}
let popup = document.getElementById("popup")
function mouseDown(){
    popup.style.visibility = "visible"
}
function mouseUp(){
    popup.style.visibility = "hidden"
}
let zichbaar = false;
let text = document.getElementById("testText")
function toShow(){
    zichbaar = !zichbaar
    console.log(zichbaar)
    if (zichbaar == true){
        text.style.display = "block"
        //text.style.visibility = "visible"

    }else {
        text.style.display = "none"

       // text.style.visibility = "hidden"
    }
}

//Book list

let title = document.getElementById("title")
let writer =  document.getElementById("writer")
let story = document.getElementById("story")
let book = document.getElementById("book")
let btnlist = document.getElementById("btnlist")

btnlist.addEventListener('click',function(){
    //console.log(title.value)
    book.innerHTML += `<tr>
    <td>${title.value}</td>
    <td>${writer.value}</td>
    <td>${story.value}</td>
    <td> <i class="fa-solid fa-trash-can" onclick="removeRow(this)"></i> </td>
    </tr>`
    title.value = "";
    writer.value = "";
    story.value = "";
})

console.log(title.value)
title.value= "";
function removeRow(e){
    console.log(e.parentElement.parentElement)
    e.parentElement.parentElement.remove()
}