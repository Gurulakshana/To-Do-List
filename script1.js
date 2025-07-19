user=localStorage.getItem("user")
document.querySelector("#signup").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    if (!username||!password||!confirmPassword) {
        alert("All fields are required.");
        return;
    }
    var todo=""
    if(localStorage.getItem("user")==null){
        var user =JSON.stringify([{ username, password,todo }]);
    }
    else{
        let users = JSON.parse(localStorage.getItem("user"))
        for(i=0 ; i<users.length ; i++){
            if(users[i].username==username && users[i].password==password){
                alert("Username and Password already exist")
                return
            }
        }
        var user = JSON.parse(localStorage.getItem("user"))
        user.push({ username, password,todo })
        user=JSON.stringify(user)
    }
    localStorage.setItem("user",user)
    window.location.href = "index.html";
})
