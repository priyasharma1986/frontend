let itemList = document.getElementById("itemList")
console.log(itemList.children)

function toonItem(e){
    console.log(e.firstChild.nextSibling.innerHTML)
    for (let x = 0; x<itemList.children.length; x++){
        console.log(itemList.children[x].lastChild.previousSibling.innerHTML)
        if(itemList.children[x].firstChild.nextSibling.innerHTML == e.firstChild.nextSibling.innerHTML ){
            itemList.children[x].lastChild.previousSibling.style.display = "block"
        }else{
            itemList.children[x].lastChild.previousSibling.style.display = "none"
        }
     
        }
    
    }

    function closeItems(e){
        console.log("piep")
        for(let x =0; x<itemList.children.length; x++){

            if(itemList.children[x].firstChild.nextSibling.innerHTML == e.firstChild.nextSibling.innerHTML ){
                itemList.children[x].lastChild.previousSibling.style.document = "none"
        }
    }
}
let searchInput = document.getElementById("name")
let welcome = document.getElementById("welcome")

function search(){
    welcome.innerHTML = `Welcome ${searchInput.value}`
    document.getElementById("welcome").style.display = "block"
    document.getElementById("welcomeMsg").style.display = "none"
}