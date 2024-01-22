var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
})

cancelpopup.addEventListener("click",function(){
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})
var addbook=document.getElementById("add-book")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitleinput.value}</h1>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)"> delete</button>`
    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
    
})

var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description-input")

function deletebook(event)
{
    event.target.parentElement.remove()
}