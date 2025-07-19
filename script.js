var ul=document.querySelector("table")
n=JSON.parse(localStorage.getItem("n"))
function add()
{
    var list=document.createElement("tr")
    var inp=document.getElementById("inp")
    list.innerHTML="<tr><td><input onclick='check(event)' type='checkbox'></td>"+`<td id='td1'><a id='a'>${inp.value}</a></td>`+"<td><button id='div1' onclick='del(event)'>x</button></td></tr>"
    ul.append(list)
    save() //saving after additiond
}
function displayData(){
        let users = JSON.parse(localStorage.getItem("user")) //retriving data
        document.getElementById("table").innerHTML=users[n].todo //dispaying
}
function save(){
    inp.value="" //to make input field after entering data
    let users = JSON.parse(localStorage.getItem("user"))
    users[n].todo=table.innerHTML
    localStorage.setItem("user",JSON.stringify(users))
}
        
    
function del(event)
{
    event.target.parentElement.parentElement.remove(); //removing entire row
    save() //saving after deletion
}

function check(event){
    event.target.parentElement.nextElementSibling.innerHTML=event.target.parentElement.nextElementSibling.textContent.strike() //striking text
}
