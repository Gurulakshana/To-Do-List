var ul=document.querySelector("table")
let Userdata=''
function add()
{
    var list=document.createElement("tr")
    var inp=document.getElementById("inp")
    list.innerHTML="<td><input onclick='check(event)' type='checkbox'></td>"+`<td id='td1'><a id='a'>${inp.value}</a></td>`+"<td><button id='div1' onclick='del(event)'>x</button></td>"
    ul.append(list)
    save() //saving after additiond
}
if(table.value==undefined){
    displayData(); //when we open newly the last input value on last open will be displayed
    function displayData(){
        const s=localStorage.getItem("Userdata") //retriving data
        document.getElementById("table").innerHTML=s //dispaying
}
}
function save(){
    inp.value="" //to make input field after entering data
    Userdata+=localStorage.setItem("Userdata",table.innerHTML) //to store input value and display on next open
}
        
    
function del(event)
{
    event.target.parentElement.parentElement.remove(); //removing entire row
    save() //saving after deletion
}

function check(event){
    event.target.parentElement.nextElementSibling.innerHTML=event.target.parentElement.nextElementSibling.textContent.strike() //striking text
}